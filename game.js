// JavaScript source code
const NUMBER_OF_CARDS = 57;
// Tehdään array jossa on korttien numerot 1-NUMBER_OF_CARDS
const cardNumbers = [...Array(NUMBER_OF_CARDS).keys()].map((x) => x + 1);

// Kopioidaan uuteen vektoriin
let imageNumbers = [...cardNumbers];

// Tässä mode mitä pelataan, tällä voi tehdä sitten muutoksia
const GAME_MODE = new URLSearchParams(window.location.search).get("mode");

  

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
