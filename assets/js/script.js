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

    const gameBoard = document.querySelector(".gameboard");
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

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
            alert('You found a match')
            cards[optionOneId].setAttribute("src", "assets/images/blank.webp")
            cards[optionTwoId].setAttribute("src", "assets/images/blank.webp")
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute("src", "assets/images/card_back.webp")
            cards[optionTwoId].setAttribute("src", "assets/images/card_back.webp")
        };
        cardsChosen = [];
        cardsChosenId = [];
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

    generateCards();
});