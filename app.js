(function () {
  var s = window.SITE, $ = function (q) { return document.querySelector(q); }, all = function (q) { return document.querySelectorAll(q); };
  var has = function (k) { var v = s[k]; return Array.isArray(v) ? v.length > 0 : !!v; };
  var photos = s.photos || [];

  // не заповнене в config.js, отже прибираємо блок/кнопку зі сторінки
  all("[data-need]").forEach(function (el) { if (!has(el.dataset.need)) el.remove(); });
  all("[data-bind]").forEach(function (el) { el.textContent = s[el.dataset.bind] == null ? "" : s[el.dataset.bind]; });
  all("[data-call]").forEach(function (a) { a.href = "tel:" + s.phone; });
  all("[data-tg]").forEach(function (a) { a.href = s.telegram; });
  all("[data-ig]").forEach(function (a) { a.href = s.instagram; });
  all("[data-viber]").forEach(function (a) { a.href = s.viber; });
  all("[data-maps]").forEach(function (a) { a.href = s.mapsLink; });

  Object.keys(s.theme || {}).forEach(function (k) { document.documentElement.style.setProperty(k, s.theme[k]); });
  document.title = s.name + " — " + s.tagline + (s.demo ? " (демо)" : "");
  $("meta[name=description]").content = s.lead || s.tagline;
  if ($("#map")) $("#map").src = "https://www.google.com/maps?q=" + s.lat + "," + s.lng + "&z=16&output=embed";

  var ig = (s.instagram || "").replace(/\/+$/, "").split("/").pop();
  if ($("#igHandle")) $("#igHandle").textContent = "@" + ig;

  // головна кнопка: Instagram Direct, інакше Telegram, Viber або дзвінок
  var c = $("#mainContact");
  if (c) {
    var ways = [[ig && "https://ig.me/m/" + ig, "Написати в Direct", "i-instagram"], [s.telegram, "Написати в Telegram", "i-send"], [s.viber, "Написати у Viber", "i-chat"], [s.phone && "tel:" + s.phone, "Подзвонити", "i-phone"]];
    var w = ways.filter(function (x) { return x[0]; })[0];
    if (w) { c.href = w[0]; c.innerHTML = '<svg class="icon"><use href="#' + w[2] + '"/></svg>' + w[1]; } else c.remove();
  }

  // фото: спершу локальний файл, якщо його нема, пряме посилання Google
  function img(p, alt, eager) {
    var i = new Image(); i.alt = alt || ""; i.decoding = "async"; if (!eager) i.loading = "lazy";
    i.onerror = function () { i.onerror = function () { i.remove(); }; i.src = p.remote; };
    i.src = p.local; return i;
  }
  if (photos[0]) $("#heroVisual").appendChild(img(photos[0], s.name, true));
  if (photos[1] && $("#aboutPhoto")) $("#aboutPhoto").appendChild(img(photos[1], s.name));
  else if ($("#aboutPhoto")) $("#aboutPhoto").remove();
  if ($("#gallery")) photos.slice(2, 10).forEach(function (p) { $("#gallery").appendChild(img(p, s.name)); });

  if ($("#features")) $("#features").innerHTML = (s.features || []).map(function (f) { return "<li>" + f + "</li>"; }).join("");
  if ($("#itemList")) (s.items || []).forEach(function (m) {
    var card = document.createElement("article"); card.className = "card";
    if (m.photo != null && photos[m.photo]) { var ph = document.createElement("div"); ph.className = "card-photo"; ph.appendChild(img(photos[m.photo], m.name)); card.appendChild(ph); }
    card.insertAdjacentHTML("beforeend", '<div class="card-body"><h3>' + m.name + "</h3>" + (m.desc ? "<p>" + m.desc + "</p>" : "") + (m.price ? '<span class="price">' + m.price + "</span>" : "") + "</div>");
    $("#itemList").appendChild(card);
  });
  if ($("#reviewList")) $("#reviewList").innerHTML = (s.reviews || []).map(function (r) {
    return '<figure class="review"><div class="stars">★★★★★</div><blockquote>' + r.text + "</blockquote><figcaption>" + r.name + (r.when ? " · " + r.when : "") + "</figcaption></figure>";
  }).join("");

  // мобільне меню
  var toggle = $(".nav-toggle"), nav = $(".site-nav");
  function setNav(open) { nav.classList.toggle("is-open", open); toggle.setAttribute("aria-expanded", String(open)); toggle.setAttribute("aria-label", open ? "Закрити меню" : "Відкрити меню"); }
  document.documentElement.classList.add("has-js");
  toggle.addEventListener("click", function () { setNav(toggle.getAttribute("aria-expanded") === "false"); });
  nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { setNav(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") { setNav(false); toggle.focus(); } });
})();
