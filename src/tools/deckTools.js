//Remove king from the deck
export function removeKing(deck, idKings, whichReturn) {
  var _chiefCard;
  deck.map(card => {
    if (idKings.includes(card)) {
      _chiefCard = card;
      const index = deck.indexOf(card);
      deck.splice(index, 1);
    }
  })

  if (whichReturn === "idKing") {
    return (_chiefCard)
  } else {
    return (deck)
  }
}

//Shuffle cards
export function shuffleCard(deck) {
  var j, x, i;
  for (i = deck.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = deck[i];
    deck[i] = deck[j];
    deck[j] = x;
  }

  return deck
}

//Create deck (removing sliced card from local storage deck)
export function removeSliced(shuffledDeck, nameLocal) {
  localStorage.setItem(nameLocal, shuffledDeck.slice(10));
}
