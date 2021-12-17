// JavaScript source code
//Get all the images
const imageArray = ["assets/2.png", "assets/3.png", "assets/4.png",
"assets/7.png", "assets/8.png", "assets/9.png", "assets/10.png", "assets/11.png",
 "assets/14.png", "assets/16.png", "assets/17.png", "assets/17.png", "assets/17.png",
"assets/19.png", "assets/20.png", "assets/22.png", "assets/23.png",
"assets/24.png", "assets/25.png", "assets/26.png", "assets/27.png", "assets/30.png", "assets/30.png", "assets/30.png",
"assets/32.png", "assets/33.png", "assets/34.png", "assets/35.png", "assets/36.png", "assets/38.png",
"assets/39.png", "assets/40.png", "assets/42.png", "assets/43.png", "assets/44.png", "assets/45.png",
"assets/46.png", "assets/47.png", "assets/48.png", "assets/49.png", "assets/50.png", "assets/51.png", "assets/52.png",
"assets/53.png", "assets/54.png", "assets/55.png", "assets/56.png", "assets/57.png", "assets/58.png", "assets/1.png",
"assets/5.png", "assets/5.png", "assets/5.png", "assets/5.png", "assets/12.png", "assets/13.png", "assets/15.png", "assets/15.png",
"assets/15.png", "assets/15.png", "assets/17.png", "assets/17.png", "assets/19.png", "assets/20.png", "assets/27.png", "assets/30.png", "assets/30.png",
"assets/50.png",

];

const image = document.querySelector("img");

window.onload = () => {
  shuffleArray(imageArray);
  image.src = imageArray.shift();
};

image.addEventListener("click", () => {
  image.src = imageArray.shift();
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    console.log(i);
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}