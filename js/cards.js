import { formatCardDate } from "./date.js";

const cards = [
  {
    imageSrc: "./img/plates/de-morgan-stylized-dragons-salad-plate-set.jpg",
    title: "De Morgan Plate Set",
    date: "28.02.2023",
    category: "plates",
  },
  {
    imageSrc: "./img/plates/iznik-garden-lacquer-coasters.jpg",
    title: "Iznik Garden Plate Set",
    date: "01.03.2022",
    category: "plates",
  },
  {
    imageSrc: "./img/plates/the-met-cloisters-garden-lacquer-coasters.jpg",
    title: "The Met Cloisters Garden Plate Set",
    date: "11.04.2022",
    category: "plates",
  },
  {
    imageSrc:
      "./img/plates/midnight-garden-fruit-and-flowers-salad-plate-set.jpg",
    title: "Midnight Garden Plate Set",
    date: "17.01.2022",
    category: "plates",
  },
  {
    imageSrc: "./img/plates/medieval-creatures-glass-coasters.jpg",
    title: "Medieval Creatures Plate Set",
    date: "19.03.2022",
    category: "plates",
  },
  {
    imageSrc: "./img/plates/louis-c-tiffany-stained-glass-coasters.jpg",
    title: "Louis C Tiffany Glass Plate Set",
    date: "12.07.2022",
    category: "plates",
  },
  {
    imageSrc: "./img/plates/monet-water-lilies-glass-coasters.jpg",
    title: "Monet Water Lilies Plate Set",
    date: "15.08.2022",
    category: "plates",
  },
  {
    imageSrc: "./img/plates/japanese-prints-glass-coasters.jpg",
    title: "Japanese Prints Glass Plate Set",
    date: "05.01.2022",
    category: "plates",
  },
  {
    imageSrc: "./img/plates/peeters-bouquet-of-flowers-lacquer-coasters.jpg",
    title: "Peeters Bouquet of Flowers Plate Set",
    date: "01.03.2022",
    category: "plates",
  },
  {
    imageSrc: "./img/plates/sumatran-symbols-coasters.jpg",
    title: "Sumatran Symbols Plate Set",
    date: "08.04.2022",
    category: "plates",
  },
  {
    imageSrc: "./img/plates/van-gogh-first-steps-salad-plate-set.jpg",
    title: "Van Gogh First Steps Plate Set",
    date: "07.04.2022",
    category: "plates",
  },
  {
    imageSrc: "./img/plates/van-gogh-glass-coasters.jpg",
    title: "Van Gogh Glass Plate Set",
    date: "18.07.2022",
    category: "plates",
  },
  {
    imageSrc: "./img/plates/van-gogh-roses-salad-plate-set.jpg",
    title: "Van Gogh Roses Plate Set",
    date: "01.03.2022",
    category: "plates",
  },
  {
    imageSrc: "./img/teacups/blue-a-white-cranes-teacup-and-saucer.jpg",
    title: "Blue and White Cranes Teacup and Saucer",
    date: "01.02.2022",
    category: "teacups",
  },
  {
    imageSrc:
      "./img/teacups/dehn-spring-in-central-park-covered-mug-with-tea-infuser.jpg",
    title: "Dehn Spring Mug with Infuser",
    date: "10.01.2022",
    category: "teacups",
  },
  {
    imageSrc: "./img/teacups/egyptian-coffin-mug.jpg",
    title: "Egyptian Coffin Mug",
    date: "11.01.2022",
    category: "teacups",
  },
  {
    imageSrc: "./img/teacups/garden-gathering-mug.jpg",
    title: "Garden Gathering Mug",
    date: "12.01.2022",
    category: "teacups",
  },
  {
    imageSrc: "./img/teacups/good-earth-blooming-poppies-mug.jpg",
    title: "Booming Poppies Mug",
    date: "13.01.2022",
    category: "teacups",
  },
  {
    imageSrc: "./img/teacups/greek-vase-mug.jpg",
    title: "Greek Vase Mug",
    date: "19.02.2022",
    category: "teacups",
  },
  {
    imageSrc: "./img/teacups/hokusai-great-wave-mug.jpg",
    title: "Hokusai Great Wave Mug",
    date: "08.04.2023",
    category: "teacups",
  },
  {
    imageSrc: "./img/teacups/honeycomb-quilt-covered-mug-with-tea-infuser.jpg",
    title: "Honeycomb Quilt Mug with Infuser",
    date: "01.06.2023",
    category: "teacups",
  },
  {
    imageSrc: "./img/teacups/midnight-garden-teacup-and-saucer.jpg",
    title: "Midnight Garden Teacup and Saucer",
    date: "06.01.2023",
    category: "teacups",
  },
  {
    imageSrc: "./img/teacups/van-gogh-first-steps-teacup-and-saucer.jpg",
    title: "Van Gogh First Steps Teacup and Saucer",
    date: "01.06.2023",
    category: "teacups",
  },
  {
    imageSrc: "./img/teacups/van-gogh-irises-covered-mug-with-tea-infuser.jpg",
    title: "Van Gogh Irises Mug with Infuser",
    date: "06.01.2022",
    category: "teacups",
  },
  {
    imageSrc:
      "./img/teacups/william-morris-strawberry-thief-covered-mug-with-tea-infuser.jpg",
    title: "William Morris Strawberry Thief Mug with Infuser",
    date: "11.01.2022",
    category: "teacups",
  },
  {
    imageSrc: "./img/trays/boscoreale-fresco-wood-lacquer-tray.jpg",
    title: "Boscoreale Fresco Wood Tray",
    date: "19.03.2022",
    category: "trays",
  },
  {
    imageSrc: "./img/trays/de-morgan-stylized-dragons-lacquer-tray.jpg",
    title: "De Morgan Stylized Dragons Tray",
    date: "30.07.2022",
    category: "trays",
  },
  {
    imageSrc: "./img/trays/hokusai-great-wave-glass-tray.jpg",
    title: "Hokusai Great Wave Tray",
    date: "20.02.2022",
    category: "trays",
  },
  {
    imageSrc: "./img/trays/marbled-paper-lacquer-tray.jpg",
    title: "Marbled Paper Tray",
    date: "05.10.2022",
    category: "trays",
  },
  {
    imageSrc: "./img/trays/monet-bridge-and-water-lilies-glass-tray.jpg",
    title: "Monet Bridge and Water Lilies Tray",
    date: "01.11.2022",
    category: "trays",
  },
  {
    imageSrc: "./img/trays/peeters-bouquet-of-flowers-tray.jpg",
    title: "Peeters Bouquet of Flowers Tray",
    date: "01.12.2022",
    category: "trays",
  },
  {
    imageSrc:
      "./img/trays/sublime-landscapes-heade-newburyport-meadows-large-lacquer-tray.jpg",
    title: "Sublime Landscapes Tray",
    date: "12.01.2022",
    category: "trays",
  },
  {
    imageSrc: "./img/trays/sumatran-symbols-lacquer-tray.jpg",
    title: "Sumatran Symbols Tray",
    date: "07.06.2022",
    category: "trays",
  },
  {
    imageSrc: "./img/trays/the-met-cloisters-garden-tray.jpg",
    title: "The Met Cloisters Garden Tray",
    date: "05.03.2022",
    category: "trays",
  },
  {
    imageSrc: "./img/trays/unicorn-in-a-garden-glass-tray.jpg",
    title: "Unicorn in a Garden Tray",
    date: "07.01.2022",
    category: "trays",
  },
  {
    imageSrc: "./img/trays/van-gogh-irises-tray.jpg",
    title: "Van Gogh Irises Tray",
    date: "01.01.2022",
    category: "trays",
  },
  {
    imageSrc: "./img/teapots/american-quilt-tea-set.jpg",
    title: "American Quilt Tea Set",
    date: "01.07.2022",
    category: "teapots&teasets",
  },
  {
    imageSrc: "./img/teapots/blue-a-white-cranes-teapot.jpg",
    title: "Blue and White Cranes Teapot",
    date: "01.01.2022",
    category: "teapots&teasets",
  },
  {
    imageSrc: "./img/teapots/dehn-spring-in-central-park-tea-set.jpg",
    title: "Dehn Spring in Central Park Tea Set",
    date: "07.01.2022",
    category: "teapots&teasets",
  },
  {
    imageSrc: "./img/teapots/iznik-garden-tea-set.jpg",
    title: "Iznik Garden Tea Set",
    date: "01.01.2022",
    category: "teapots&teasets",
  },
  {
    imageSrc: "./img/teapots/kabuki-actor-mug-and-tea-set.jpg",
    title: "Kabuki Actor Mug and Tea Set",
    date: "01.07.2022",
    category: "teapots&teasets",
  },
  {
    imageSrc: "./img/teapots/midnight-garden-teapot.jpg",
    title: "Midnight Garden Teapot",
    date: "01.01.2022",
    category: "teapots&teasets",
  },
  {
    imageSrc: "./img/teapots/van-gogh-irises-tea-set.jpg",
    title: "Van Gogh Irises Tea Set",
    date: "09.01.2022",
    category: "teapots&teasets",
  },
  {
    imageSrc: "./img/teapots/van-gogh-irises-teapot.jpg",
    title: "Van Gogh Irises Teapot",
    date: "19.01.2022",
    category: "teapots&teasets",
  },
  {
    imageSrc: "./img/teapots/van-gogh-roses-teapot.jpg",
    title: "Van Gogh Roses Teapot",
    date: "01.09.2022",
    category: "teapots&teasets",
  },
  {
    imageSrc: "./img/teapots/william-morris-british-botanicals-tea-set.jpg",
    title: "William Morris British Botanicals Tea Set",
    date: "09.11.2022",
    category: "teapots&teasets",
  },
];

let cardsPlatesHTML = "";
let cardsTeacupsHTML = "";
let cardsTraysHTML = "";
let cardsTeapotsHTML = "";

cards.forEach((card) => {
  let cardHTML = `
    <div class="card">
      <div class="card__img">
        <img src="${card.imageSrc}" alt="plates">
      </div>
      <div class="card__info">
        <h4 class="card__info--title">${card.title}</h4>
        <div class="card__footer">
        <div class="card__info--date">${formatCardDate(card.date)}</div>
          <button class="btn btn--card">Buy now</button>
        </div>
      </div>
    </div>
  `;

  // Добавляем карточку в соответствующий контейнер в зависимости от значения ключа "category"
  switch (card.category) {
    case "plates":
      cardsPlatesHTML += cardHTML;
      break;
    case "teacups":
      cardsTeacupsHTML += cardHTML;
      break;
    case "trays":
      cardsTraysHTML += cardHTML;
      break;
    case "teapots&teasets":
      cardsTeapotsHTML += cardHTML;
      break;
    default:
      break;
  }
});

// Размещаем карточки в соответствующих контейнерах
let cardsPlatesContainer = document.getElementById("cardsWrapperPlates");
cardsPlatesContainer.innerHTML = cardsPlatesHTML;

let cardsTeacupsContainer = document.getElementById("cardsWrapperTeacups");
cardsTeacupsContainer.innerHTML = cardsTeacupsHTML;

let cardsTraysContainer = document.getElementById("cardsWrapperTrays");
cardsTraysContainer.innerHTML = cardsTraysHTML;

let cardsTeapotsContainer = document.getElementById("cardsWrapperTeapots");
cardsTeapotsContainer.innerHTML = cardsTeapotsHTML;
