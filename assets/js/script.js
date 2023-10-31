document.addEventListener("DOMContentLoaded", () => {
    muteAudio();
    const audioToggle = document.getElementById("sound-button");
    audioToggle.addEventListener("click", toggleAudio);
});

const cardArray = [
{
    name: 'coin',
    img: 'assets/images/coin.webp'
},
{
    name: 'coin',
    img: 'assets/images/coin.webp'
},
{
    name: 'helm',
    img: 'assets/images/helm.webp'
},
{
    name: 'helm',
    img: 'assets/images/helm.webp'
},
{
    name: 'map',
    img: 'assets/images/map.webp'
},
{
    name: 'map',
    img: 'assets/images/map.webp'
},
{
    name: 'pirate',
    img: 'assets/images/pirate.webp'
},
{
    name: 'pirate',
    img: 'assets/images/pirate.webp'
},
{
    name: 'skull',
    img: 'assets/images/skull.webp'
},
{
    name: 'skull',
    img: 'assets/images/skull.webp'
},
{
    name: 'treasure',
    img: 'assets/images/treasure.webp'
},
{
    name: 'treasure',
    img: 'assets/images/treasure.webp'
},
];

cardArray.sort(() => 0.5 - Math.random());

const gameBoard = document.querySelector(".gameboard");
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];
const scoreSection = document.querySelector(".score-section");
const counterContainer = document.querySelector('#counter-container');
const resultsScreen = document.querySelector('#results-screen');
const howTo = document.getElementById("how-to-alt");
const username = document.querySelector("#username");

const playButton = document.querySelector("#play-button");
playButton.addEventListener("click", playGame);

/**
 * Starts the game when play-button is clicked
 * Triggers the generateCards() function
 */
function playGame() {

    let introScreen = document.querySelector(".intro");
    introScreen.classList.add("hidden");
    gameBoard.classList.remove("hidden");
    scoreSection.classList.remove("hidden");
    generateCards();
}

/**
 * Reveals gameboard and generates the cards face down
 * Brings how to play popup closer to the top of the
 * viewport so that it doesn't cover the control icons
 * Inspired by Ania Kubów's Memory Card game
 */
function generateCards() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement("img");
        card.setAttribute("src", "assets/images/card_back.webp");
        card.setAttribute("data-id", i);
        card.setAttribute("class", "card back");
        card.addEventListener("click", flipCard);
        gameBoard.appendChild(card);
    }

    howTo.setAttribute("id", "how-to");

    // Sets the pair counter. Once a pair is found, checkForMatch updates it
    if (username.value === "") {
       counterContainer.textContent = "Your pairs: " + cardsWon.length;
    } else {
       counterContainer.textContent = username.value + "'s pairs: " + cardsWon.length;
    }
}

/**
 * Checks to see if the cards in the choseCards array match
 * If they do the card-type is pushed to the cardsWon array
 * If not they are removed from the chosenCards array and flipped
 * Also controls the output of the score section
 * Heavily influenced by Ania Kubów's Memory Card game
 */
function checkForMatch() {
    var cards = document.querySelectorAll('.card');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    let remainingCards = document.querySelectorAll('img');

    if (cardsChosen[0] === cardsChosen[1]) {
        const pairSound = document.getElementById("pair-sound");
        pairSound.play();
        // Adds .correct to correct cards (hides them)
        cards[optionOneId].classList.add("correct");
        cards[optionTwoId].classList.add("correct");
        // Pushes correct cards to cardsWon array
        cardsWon.push(cardsChosen);
        // Unlocks the board
        for (let card of remainingCards) {
            card.addEventListener("click", flipCard);
        }

    } else {
        const flipSound = document.getElementById("flip-sound");
        flipSound.play();
        // 'Flips' cards back over
        cards[optionOneId].setAttribute("src", "assets/images/card_back.webp");
        cards[optionTwoId].setAttribute("src", "assets/images/card_back.webp");
        cards[optionOneId].classList.remove("flipped");
        cards[optionTwoId].classList.remove("flipped");
        cards[optionOneId].classList.add("back");
        cards[optionTwoId].classList.add("back");
        // Unlocks the board
        remainingCards = document.querySelectorAll('.back');
        for (let card of remainingCards) {
            card.addEventListener("click", flipCard);
        }
    }
    
    // Controls the pair counter output
    if (username.value === "") {
       counterContainer.textContent = "Your pairs: " + cardsWon.length;
    } else {
       counterContainer.textContent = username.value + "'s pairs: " + cardsWon.length;
    }
    
    // Clears the two arrays
    cardsChosen = [];
    cardsChosenId = [];
    
    // Checks that all pairs are found and triggers result screen
    if (cardsWon.length === cardArray.length / 2) {
        const victorySound = document.getElementById("victory-sound");
        const resetButton = document.getElementById("reset-button");
        resetButton.addEventListener("click", restart);
        gameBoard.classList.add("hidden");
        gameBoard.innerHTML = "";
        scoreSection.classList.add("hidden");
        resultsScreen.classList.remove("hidden");
        victorySound.play();
        howTo.setAttribute("id", "how-to-alt");
    }
}

/**
 * Mutes all the audio on startup/refresh
 * Inspired by Marvelous Matching by David Calikes
 */
function muteAudio() {
    const sounds = document.querySelectorAll("audio");
    for (const sound of sounds)
        sound.muted = true;
}

/**
 * Allows speaker icon/button to act as an on/off switch for all audio
 * Inspired by Marvelous Matching by David Calikes
 */
function toggleAudio() {
    const sounds = document.querySelectorAll("audio");
    const audioToggle = document.getElementById("sound-button");

    if (audioToggle.className === "fa-solid fa-volume-off") {
        audioToggle.className = "fa-solid fa-volume-high";
        for (const sound of sounds) {
            sound.muted = false;
        }
    } else {
        audioToggle.className = "fa-solid fa-volume-off";
        for (const sound of sounds) {
            sound.muted = true;
        }
    }
}

/**
 * Flips the card when it is clicked on
 * Pushes the flipped card to the cardsChosen array
 * Inspired by Ania Kubów's Memory Card game
 */
function flipCard() {
    var cardId = this.getAttribute('data-id');

    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    this.classList.add("flipped");
    this.classList.remove("back");
    this.removeEventListener("click", flipCard);
    
    let remainingCards = document.querySelectorAll('img');
    // Triggers checkForMatch once two cards are selected
    if (cardsChosen.length === 2) {
        for (let card of remainingCards) {
            card.removeEventListener("click", flipCard);
        }
        setTimeout(checkForMatch, 500);
    }
}

/**
 * Resets the gameboard and score section once the user has found
 * all the pairs and clicked the play again button
 * Inspired by Javascript Academy's memory card game
 */
function restart() {
    gameBoard.innerHTML = "";
    cardsChosen = [];
    cardsChosenId = [];
    cardsWon = [];
    cardArray.sort(() => 0.5 - Math.random());
    resultsScreen.classList.add("hidden");
    gameBoard.classList.remove("hidden");
    scoreSection.classList.remove("hidden");
    generateCards();
}

/**
 * Reveals/hides the how to section when the help icon is clicked
 */
function toggleHowTo() {
    if (howTo.style.display === "block") {
        howTo.style.display = "none";
    } else {
        howTo.style.display = "block";
    }
}