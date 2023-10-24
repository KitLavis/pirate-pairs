document.addEventListener("DOMContentLoaded", () => {

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

    const pairCounter = document.querySelector(".pair-counter");

    function generateCards() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement("img");
            card.setAttribute("src", "assets/images/card_back.webp");
            card.setAttribute("data-id", i);
            card.setAttribute("class", "card back");
            card.addEventListener("click", flipCard);
            gameBoard.appendChild(card);
        }
    };

    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (cardsChosen[0] === cardsChosen[1]) {
            const pairSound = document.getElementById("pair-sound");
            pairSound.play();
            cards[optionOneId].classList.add("correct");
            cards[optionTwoId].classList.add("correct");
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute("src", "assets/images/card_back.webp");
            cards[optionTwoId].setAttribute("src", "assets/images/card_back.webp");
            cards[optionOneId].addEventListener("click", flipCard);
            cards[optionTwoId].addEventListener("click", flipCard);
            cards[optionOneId].classList.remove("flipped");
            cards[optionTwoId].classList.remove("flipped");
            cards[optionOneId].classList.add("back");
            cards[optionTwoId].classList.add("back");
        };

        cardsChosen = [];
        cardsChosenId = [];
        pairCounter.textContent = cardsWon.length;

        if (cardsWon.length === cardArray.length / 2) {
            const victorySound = document.getElementById("victory-sound");
            victorySound.play();
            pairCounter.textContent = "Aaarrrgh! Not bad for a landlubber!";
            // auto restarts after 3 seconds
            setTimeout(restart, 3000);
        };
    };


    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute("src", cardArray[cardId].img);
        this.classList.add("flipped");
        this.classList.remove("back");
        this.removeEventListener("click", flipCard);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    };

    function restart() {
        gameBoard.innerHTML = "";
        pairCounter.textContent = "0";
        cardsChosen = [];
        cardsChosenId = [];
        cardsWon = [];
        cardArray.sort(() => 0.5 - Math.random());
        generateCards();
    }

    generateCards();

});