// JavaScript source code
const NUMBER_OF_CARDS = 89;
// Tehdään array jossa on korttien numerot 1-NUMBER_OF_CARDS
let cardNumbers = [...Array(NUMBER_OF_CARDS).keys()].map((x) => x + 1);

// Tässä mode mitä pelataan, tällä voi tehdä sitten muutoksia
const GAME_MODE = new URLSearchParams(window.location.search).get("mode");
let GAME_MODE_CARDS = [];

switch (GAME_MODE) {
  case "relaxed":
    // Tässä määritellään mitä kortteja käytetään hardcore modessa
    GAME_MODE_CARDS = [2, 3, 7, 8, 9, 10, 11, 14, 16, 17, 19, 20, 22, 23, 24, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 50, 52, 53, 54, 55, 57, 58, 60, 64, 65, 73, 75, 76, 79, 80, 81, 82, 83, 86];
    break;
  case "hardcore":
    // Tässä määritellään mitä kortteja käytetään rennossa modessa
    GAME_MODE_CARDS = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 26, 27, 28, 29, 30, 31, 34, 35, 36, 37, 40, 41, 44, 45, 48, 49, 51, 53, 54, 55, 56, 58, 59, 60, 61, 62, 63, 64, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 83, 84, 85, 87, 88, 89];
    break;
  // Lisää pelimuotoja voi tehdä kun lisää eri caseja
  case "normal":
  default:
    // Normaalisti oteta mitään pois
    break;
}

// Otetaan pois kortit jotka ei ole käytössä pelimuodossa
if (GAME_MODE_CARDS.length > 0) {
  cardNumbers = cardNumbers.filter((id) => GAME_MODE_CARDS.includes(id));
}

// Kopioidaan uuteen vektoriin
let imageNumbers = [...cardNumbers];

// Tarvittavat komponentit, haetaan ID:llä
const card = document.getElementById("card");
const front = document.getElementById("cardFront");
const back = document.getElementById("cardBack");
const gameEnd = document.getElementById("gameEnd");
const startAgain = document.getElementById("startAgain");
let frontShown = true;

// Tämä funktio lataa kuvat ennen niiden käyttöä selaimen muistiin
function preloadImage(idx) {
  const img = new Image();
  img.src = `assets/${idx}.png`;
}

function startGame() {
  // Piilotetaan lopputekstit ja napit
  gameEnd.style.display = "none";
  // Sekoitetaan pakka
  shuffleArray(imageNumbers);
  preloadImage(imageNumbers[0]);
  // Resetoidaan korttien tila
  card.classList.remove("flipped");
  frontShown = true;
  // ja haetaan eka kortti
  front.style.backgroundImage = `url(assets/${imageNumbers.shift()}.png)`;
}

window.onload = () => {
  // Aloitetaan peli kun sivu latautunut
  startGame();
};

startAgain.addEventListener("click", () => {
  // Kopioidaan uudestaan numerot
  imageNumbers = [...cardNumbers];
  // Ja aloitetaan peli
  startGame();
});

card.addEventListener("click", () => {
  // Jos ei yhtään numeroa jäljellä, näytä lopputeksti ja poista kuvat
  if (imageNumbers.length === 0) {
    card.classList.toggle("flipped");
    gameEnd.style.display = "block";
    back.style.removeProperty("background-image");
    front.style.removeProperty("background-image");
    return;
  }

  // Jos etupuoli näkyvissä, lataa takapuolelle uusi kortti (hehe...)
  if (frontShown) {
    back.style.backgroundImage = `url(assets/${imageNumbers.shift()}.png)`;
    // muuten lataa etupuolelle uusi kortti
  } else {
    front.style.backgroundImage = `url(assets/${imageNumbers.shift()}.png)`;
  }

  if (imageNumbers.length > 0) {
    preloadImage(imageNumbers[0]);
  }
  // Ja nyt käännä kortti
  card.classList.toggle("flipped");
  // Ja muuta lippu toisinpäin
  frontShown = !frontShown;
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
