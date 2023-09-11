const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  memoryGame.shuffleCards()
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  document.querySelector('#memory-board').innerHTML = html;
  let pairsClicked = document.getElementById("pairs-clicked")
  let pairsGuessed = document.getElementById("pairs-guessed")

  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      if (memoryGame.pickedCards.length < 2) {
        card.classList.toggle("turned")
        memoryGame.pickedCards.push(card)
      }
      if (memoryGame.pickedCards.length === 2) {
        setTimeout(() => {
          if ((memoryGame.pickedCards[0] !== undefined) && (memoryGame.pickedCards[1] !== undefined)) {
            memoryGame.pairsClicked++
            let card1 = memoryGame.pickedCards[0].getAttribute("data-card-name")
            let card2 = memoryGame.pickedCards[1].getAttribute("data-card-name")

            if (memoryGame.checkIfPair(card1,card2)) {
              memoryGame.pickedCards[0].classList.toggle("blocked")
              memoryGame.pickedCards[1].classList.toggle("blocked")
              memoryGame.pairsGuessed++
            }
            else {
              memoryGame.pickedCards[0].classList.toggle("turned")
              memoryGame.pickedCards[1].classList.toggle("turned")
            }
            memoryGame.pickedCards = []
            pairsClicked.innerHTML = memoryGame.pairsClicked/2
            pairsGuessed.innerHTML = memoryGame.pairsGuessed/2
          }
        }, 900)
      }
    });
  });
});
