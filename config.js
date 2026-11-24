// Концепт для портфоліо NEIM: вигаданий автосервіс. Назва, послуги й ціни умовні, адреси, телефону, карти й відгуків немає.
window.SITE = {
  demo: false,                      // концепт для портфоліо: без банера «демо-версія»
  demoText: "",
  name: "Torque Auto Service",
  city: "Дніпро",
  category: "Автосервіс",
  tagline: "Діагностика, обслуговування та ремонт авто",
  lead: "Чесно скажемо, що з авто і скільки це коштує. Запис за повідомленням у Telegram або Instagram.",
  rating: 0,
  reviewsCount: 0,
  priceRange: "",
  phone: "",
  phoneDisplay: "",
  telegram: "https://t.me/killryim",
  instagram: "https://www.instagram.com/killry87/",
  viber: "",
  address: "",
  lat: 0,
  lng: 0,
  mapsLink: "",
  hours: "",
  theme: { "--accent": "#4fa3e0", "--bg": "#0a0d12" },
  featuresTitle: "Чому до нас",
  features: ["Запис за повідомленням", "Діагностика й ремонт", "Обслуговування двигуна", "Підбір запчастин"],
  itemsNav: "Прайс",
  itemsTitle: "Прайс",
  items: [
    { name: "Комп'ютерна діагностика", price: "500 ₴", desc: "Зчитування помилок, висновок майстра" },
    { name: "Заміна масла та фільтрів", price: "від 800 ₴", desc: "Масло, масляний і повітряний фільтри" },
    { name: "Діагностика ходової", price: "400 ₴", desc: "Огляд на підйомнику" },
    { name: "Заміна гальмівних колодок", price: "від 700 ₴", desc: "Колодки на вісь, перевірка дисків" },
    { name: "Ремонт двигуна", price: "від 2 500 ₴", desc: "Після діагностики, з погодженням вартості" }
  ],
  itemsNote: "Ціни умовні: це концепт-демо вигаданого автосервісу.",
  reviews: [],
  photos: [
    { local: "assets/img/p1.jpg", remote: "" },
    { local: "assets/img/p2.jpg", remote: "" },
    { local: "assets/img/p3.jpg", remote: "" }
  ]
};
