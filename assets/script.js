const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const dots = document.getElementById("dots");
const img = document.querySelector(".banner-img");
let currentIndex = 0;
const tagline = document.getElementById("tagline");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("span");
	dot.classList.add("dot");
	dots.appendChild(dot);
}
updateCarousel("init");

arrowLeft.onclick = function () {
	updateCarousel("left");
}

arrowRight.onclick = function () {
	updateCarousel("right");
}

function updateCarousel(direction) {
	dots.children[currentIndex].classList.remove("dot_selected");
	if (direction == "right") {
		currentIndex++;
	}
	if (direction == "left") {
		currentIndex--;
	}
	if (currentIndex == slides.length) {
		currentIndex = 0;
	}
	if (currentIndex == -1) {
		currentIndex = slides.length-1;
	}
	img.src = "./assets/images/slideshow/" + slides[currentIndex].image;
	tagline.innerHTML = slides[currentIndex].tagLine;
	dots.children[currentIndex].classList.add("dot_selected");
}
