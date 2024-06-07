const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

//ARROWS------------------------------

const arrowLeft = document.getElementById("arrow-left");

arrowLeft.addEventListener("click", () => {
  console.log("Vous avez cliqué sur la flèche gauche");
});

const arrowRight = document.getElementById("arrow-right");

arrowRight.addEventListener("click", () => {
  console.log("Vous avez cliqué sur la flèche droite");
});


const dots = document.querySelectorAll(".dot");
console.log("okiiii")

