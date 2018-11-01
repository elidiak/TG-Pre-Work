const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;
while (currentCard != 'spade') {
  //Pick a random card in cards
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}
