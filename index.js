// JavaScript source code
//Get all the images
const imageArray = ["assets/Bodyshot.png", "assets/Sääntö.png", "assets\Cheers, kaikki juo!.png", "assets\Drinkkimestari.png"];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => {
  shuffleArray(imageArray);
  image.src = imageArray.shift();
};

image.addEventListener( "click", () => {image.src = imageArray.shift()}
);

function shuffleArray(array) {
  for (let i = array.length - 1; 1 > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], (array[j] = array[j]), array[i]];
  }
}