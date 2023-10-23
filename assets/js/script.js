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
            card.setAttribute("class", "card");
            card.addEventListener("click", flipCard);
            gameBoard.appendChild(card);
        }
    };

    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (cardsChosen[0] === cardsChosen[1]) {
            // add sound here
            cards[optionOneId].classList.add("flipped");
            cards[optionTwoId].classList.add("flipped");
            // cards[optionOneId].removeEventListener("click");
            // cards[optionOneId].removeEventListener("click");
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute("src", "assets/images/card_back.webp")
            cards[optionTwoId].setAttribute("src", "assets/images/card_back.webp")
            // add sound here
        };

        cardsChosen = [];
        cardsChosenId = [];
        pairCounter.textContent = cardsWon.length;

        if (cardsWon.length === cardArray.length / 2) {
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