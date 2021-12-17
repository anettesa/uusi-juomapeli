// JavaScript source code
//Get all the images
const imageArray = ["assets/1.png", "assets/2.png", "assets/3.png", "assets/4.png", "assets/5.png", 
"assets/6.png", "assets/7.png", "assets/8.png", "assets/9.png", "assets/10.png", "assets/11.png", "assets/12.png", 
"assets/13.png", "assets/14.png", "assets/15.png", "assets/16.png", "assets/17.png", "assets/18.png", 
"assets/19.png", "assets/20.png", "assets/21.png", "assets/21.png", "assets/22.png", "assets/23.png",
"assets/24.png", "assets/25.png", "assets/26.png", "assets/27.png", "assets/28.png", "assets/29.png", "assets/30.png", "assets/31.png",
"assets/32.png", "assets/33.png", "assets/34.png", "assets/35.png", "assets/36.png", "assets/37.png", "assets/38.png",
"assets/39.png", "assets/40.png", "assets/41.png", "assets/42.png", "assets/43.png", "assets/44.png", "assets/45.png",
"assets/46.png", "assets/47.png", "assets/48.png", "assets/49.png", "assets/50.png", "assets/51.png", "assets/52.png",
"assets/53.png", "assets/54.png", "assets/55.png", "assets/56.png", "assets/57.png", "assets/58.png", "assets/1.png",
"assets/5.png", "assets/5.png", "assets/5.png", "assets/5.png", "assets/12.png", "assets/13.png", "assets/15.png", "assets/15.png",
"assets/15.png", "assets/15.png", "assets/17.png", "assets/17.png", "assets/19.png", "assets/20.png", "assets/27.png", "assets/30.png", "assets/30.png",
"assets/50.png",

];

// Tehdään array jossa on korttien numerot 1-NUMBER_OF_CARDS
const cardNumbers = [...Array(1-77).keys()].map((x) => x + 1);

// Kopioidaan uuteen vektoriin
let imageNumbers = [77];

// Tarvittavat komponentit, haetaan ID:llä
const card = document.getElementById("card");
const front = document.getElementById("cardFront");
const back = document.getElementById("cardBack");
const gameEnd = document.getElementById("gameEnd");
const startAgain = document.getElementById("startAgain");
let frontShown = true;

function startGame() {
  // Piilotetaan lopputekstit ja napit
  gameEnd.style.display = "none";
  // Sekoitetaan pakka
  shuffleArray(imageNumbers);
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
