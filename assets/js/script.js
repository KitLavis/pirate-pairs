document.addEventListener("DOMContentLoaded", () => {

    const cards = [
    {
        name: 'coin',
        img: 'asset/images/coin.webp'
    },
    {
        name: 'coin',
        img: 'asset/images/coin.webp'
    },
    {
        name: 'helm',
        img: 'asset/images/helm.webp'
    },
    {
        name: 'helm',
        img: 'asset/images/helm.webp'
    },
    {
        name: 'map',
        img: 'asset/images/map.webp'
    },
    {
        name: 'map',
        img: 'asset/images/map.webp'
    },
    {
        name: 'pirate',
        img: 'asset/images/pirate.webp'
    },
    {
        name: 'pirate',
        img: 'asset/images/pirate.webp'
    },
    {
        name: 'skull',
        img: 'asset/images/skull.webp'
    },
    {
        name: 'skull',
        img: 'asset/images/skull.webp'
    },
    {
        name: 'treasure',
        img: 'asset/images/treasure.webp'
    },
    {
        name: 'treasure',
        img: 'asset/images/treasure.webp'
    },
    ];

    const gameBoard = document.querySelector(".gameboard");

    function generateCards() {
        for (let i = 0; i < cards.length; i++) {
            var card = document.createElement("img");
            card.setAttribute("src", "assets/images/card_back.webp");
            card.setAttribute("data-id", i);
            card.setAttribute("class", "card");
            // card.addEventListener("click", flipCard);
            gameBoard.appendChild(card);
        }
    }

    generateCards();
});