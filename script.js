//button consts
const container = document.getElementById("container");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");
const lizard = document.querySelector(".lizard");
const spock = document.querySelector(".spock");
const bgImage = document.querySelector(".background-image");
const chosen = document.querySelector(".you");
const house = document.querySelector(".house");
const restart = document.querySelector(".restart");
const winner = document.querySelector(".winner");
const score = document.querySelector(".score");
const houseScore = document.querySelector(".house-score");
const arr = [
	{ el: rock, class: "rock" },
	{ el: paper, class: "paper" },
	{ el: scissors, class: "scissors" },
	{ el: lizard, class: "lizard" },
	{ el: spock, class: "spock" },
];
const choice = document.getElementById("choice");
const houseCont = document.getElementById("house-cont");
let randomNumber;
let wins = 1;
let houseWins = 1;
//modal consts
const rules = document.querySelector(".show-modal");
const exit = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

for (const event of arr) event.el.addEventListener("click", playerChoice);

function openModal() {
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
}
function closeModal() {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
}

rules.addEventListener("click", openModal);
exit.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

window.addEventListener("keydown", function (e) {
	if (e.keyCode == 27) {
		closeModal();
	}
});

function houseChoice() {
	randomNumber = Math.floor(Math.random() * arr.length);
	cloneHouse = document
		.querySelector(`.${arr[randomNumber].class}`)
		.cloneNode("flase");
	container.replaceChild(cloneHouse, houseCont);
	cloneHouse.classList.add("comp-chosen");
	cloneHouse.classList.remove("hidden", "hover");
	setTimeout(function () {
		restart.classList.remove("hidden");
		house.classList.remove("hidden");
		cloneHouse.classList.add("slide-right");
	}, 1000);
}

function addHidden() {
	bgImage.style.backgroundSize = "0";
}

function playerChoice() {
	for (let e of arr) e.el.classList.add("hidden");
	this.classList.remove("hidden");
	this.classList.add("big");
	this.classList.remove("hover");
	addHidden();
	houseChoice();
	const that = this;
	const elementList = arr[randomNumber].el.classList;
	setTimeout(function () {
		that.classList.add("slide-left");
		chosen.classList.remove("hidden");
	}, 1000);
	switch (this) {
		case scissors: {
			if (elementList.contains("paper") || elementList.contains("lizard")) {
				winner.innerText = "YOU WIN!";
			} else if (
				elementList.contains("rock") ||
				elementList.contains("spock")
			) {
				winner.innerText = "THE HOUSE WINS";
			} else {
				winner.innerText = "THE GAME IS A TIE";
			}
			break;
		}
		case paper: {
			if (elementList.contains("rock") || elementList.contains("spock")) {
				winner.innerText = "YOU WIN!";
			} else if (
				elementList.contains("scissors") ||
				elementList.contains("lizard")
			) {
				winner.innerText = "THE HOUSE WINS";
			} else {
				winner.innerText = "THE GAME IS A TIE";
			}
			break;
		}
		case rock: {
			if (elementList.contains("scissors") || elementList.contains("lizard")) {
				winner.innerText = "YOU WIN!";
			} else if (
				elementList.contains("paper") ||
				elementList.contains("spock")
			) {
				winner.innerText = "THE HOUSE WINS";
			} else {
				winner.innerText = "THE GAME IS A TIE";
			}
			break;
		}
		case lizard: {
			if (elementList.contains("paper") || elementList.contains("spock")) {
				winner.innerText = "YOU WIN!";
			} else if (
				elementList.contains("rock") ||
				elementList.contains("scissors")
			) {
				winner.innerText = "THE HOUSE WINS";
			} else {
				winner.innerText = "THE GAME IS A TIE";
			}
			break;
		}
		case spock: {
			if (elementList.contains("scissors") || elementList.contains("rock")) {
				winner.innerText = "YOU WIN!";
			} else if (
				elementList.contains("paper") ||
				elementList.contains("lizard")
			) {
				winner.innerText = "THE HOUSE WINS";
			} else {
				winner.innerText = "THE GAME IS A TIE";
			}
			break;
		}
		default:
			console.log(`I don't know what this is ${data}`);
			break;
	}
	if (winner.innerText === "YOU WIN!") {
		setTimeout(function () {
			score.innerText = wins++;
		}, 1000);
	} else if (winner.innerText === "THE HOUSE WINS") {
		setTimeout(function () {
			houseScore.innerText = houseWins++;
		}, 1000);
	}
	for (const event of arr)
		event.el.removeEventListener("click", playerChoice, false);
}

function restartGame() {
	for (let i = 0; i < arr.length; i++) {
		arr[i].el.classList.remove("hidden", "big", "slide-left");
		arr[i].el.classList.add("hover");
	}
	house.classList.add("hidden");
	chosen.classList.add("hidden");
	restart.classList.add("hidden");
	container.replaceChild(houseCont, cloneHouse);
	bgImage.style.backgroundSize = "350px";
	for (const event of arr) event.el.addEventListener("click", playerChoice);
}

document.querySelector(".play-again").addEventListener("click", restartGame);
