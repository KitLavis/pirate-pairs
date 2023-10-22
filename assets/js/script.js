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

let gameBoard = document.querySelector(".gameboard");

function generateCards() {
    for (let card of cards) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-name", card.name);
        card.innerHTML = `
      <div class="front">
        <img class="front-image" src=${card.image} />
      </div>
      <div class="back">
        <img class="back-image" src="assets/images/card_back.webp">
      </div>
      `;
        gameBoard.appendChild(card);
        // card.addEventListener("click", flipCard);
    }
}

generateCards();

function flipCard() {
    card.classList.add("flipped");
}