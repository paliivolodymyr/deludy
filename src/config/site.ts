/**
 * Єдине джерело даних про кав'ярню.
 */
export const site = {
  name: "ДеЛюди",
  tagline: "кав'ярня третьої хвилі",
  description:
    "ДеЛюди — кав'ярня третьої хвилі у Тернополі, вул. Доли 9. Спешелті кава, матча бар, привітні люди та місце, де хочеться залишитись. Подзвоніть або напишіть у Telegram — і ваша кава вже готується.",

  phone: "+380 68 189 48 48",

  address: {
    street: "вул. Доли, 9",
    city: "Тернопіль",
    region: "Тернопільська область",
    zip: "46000",
  },

  coords: { lat: 49.54873901529222, lng: 25.59397426234889 },

  hours: [
    { days: "Щодня", time: "08:00 – 20:00" },
    { days: "Неділя (навесні)", time: "09:00 – 19:00" },
  ],

  socials: {
    instagram: "https://instagram.com/deludy.coffee",
    instagramHandle: "@deludy.coffee",
    telegram: "https://t.me/deludy_coffee",
    telegramHandle: "@deludy_coffee",
  },

  menu: [
    {
      title: "Класика",
      accent: "orange",
      items: [
        { name: "Еспресо", price: "50" },
        { name: "Допіо", price: "60" },
        { name: "Фільтр", price: "60/75" },
        { name: "Американо", price: "50" },
      ],
    },
    {
      title: "Молочні",
      accent: "orange",
      items: [
        { name: "Капучино", price: "65/85" },
        { name: "Лате", price: "80" },
        { name: "Флет вайт", price: "75" },
        { name: "Кортадо", price: "70" },
      ],
    },
    {
      title: "Спешл Кава",
      accent: "orange",
      items: [
        { name: "Еспресо Тонік", price: "90" },
        { name: "Еспресо Оранж", price: "90" },
      ],
    },
    {
      title: "Матча Бар",
      accent: "green",
      items: [
        { name: "Матча Лате", price: "90" },
        { name: "Матча капуч", price: "85" },
        { name: "Матча Оранж", price: "95" },
      ],
    },
    {
      title: "Діткам",
      accent: "green",
      items: [
        { name: "Какао дитяче", price: "40/55" },
        { name: "Тепле молочко", price: "30" },
      ],
    },
    {
      title: "Чай",
      accent: "orange",
      items: [
        { name: "Чай заварний", price: "45" },
        { name: "Чай натуральний", price: "50" },
        { name: "Чай гречаний", price: "50" },
        { name: "Шу Пуер", price: "50" },
      ],
    },
  ],

  lidMenu: [
    {
      title: "Кава",
      accent: "orange" as const,
      items: [
        { name: "Фісташкове лате", note: "із ніжним ванільним кремом", price: "120" },
        { name: "Вишневий еспресо тонік", price: "100" },
        { name: "Еспресо тонік із лаймом", price: "100" },
        { name: "Еспресо оранж", price: "90" },
        { name: "Колд брю із вершковим кремом", price: "115" },
      ],
    },
    {
      title: "Матча",
      accent: "green" as const,
      items: [
        { name: "Малинова матча", note: "із малиновим кремом", price: "150" },
        { name: "Матча на кокосовій воді", price: "130" },
      ],
    },
    {
      title: "Охолоджує",
      accent: "orange" as const,
      items: [
        { name: "Ванільне какао", note: "із вершковим кремом", price: "100" },
        { name: "Сезонні лимонади", price: "100" },
        { name: "Мохіто", price: "90" },
      ],
    },
  ],

  addons: {
    title: "Додатки",
    items: [
      { name: "Будь-який сироп", price: "+5 ₴" },
      { name: "Безлактозне молоко", price: "до +15 ₴" },
      { name: "Вівсяне молоко", price: "до +40 ₴" },
      { name: "Кокосове молоко", price: "до +28 ₴" },
      { name: "Бананове молоко", price: "до +28 ₴" },
    ],
  },

  url: "https://deludy.com",
} as const;

export const phoneHref = `tel:${site.phone.replace(/[^\d+]/g, "")}`;

// universal Google Maps links: open the native app on mobile, website on desktop
const coordsStr = `${site.coords.lat},${site.coords.lng}`;
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${coordsStr}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${coordsStr}`;
