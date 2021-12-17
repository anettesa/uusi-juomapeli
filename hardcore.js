// JavaScript source code
//Get all the images
const imageArray = ["assets/1.png", "assets/1.png", "assets/2.png", "assets/3.png", "assets/4.png", "assets/5.png", "assets/5.png", "assets/5.png", "assets/5.png", "assets/5.png", 
"assets/6.png", "assets/8.png", "assets/9.png", "assets/12.png", "assets/12.png", "assets/13.png",
"assets/13.png", "assets/14.png", "assets/15.png", "assets/15.png", "assets/15.png", "assets/15.png", "assets/15.png", "assets/16.png", "assets/17.png", "assets/17.png", "assets/17.png", "assets/18.png", 
"assets/19.png", "assets/20.png", "assets/21.png", "assets/21.png", "assets/23.png",
"assets/25.png", "assets/26.png", "assets/27.png", "assets/28.png", "assets/30.png", "assets/31.png",
"assets/34.png", "assets/35.png", "assets/36.png", "assets/37.png", 
"assets/41.png", "assets/45.png",  "assets/50.png",
"assets/46.png", "assets/50.png", "assets/52.png",
"assets/55.png", "assets/56.png", "assets/57.png", 

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
