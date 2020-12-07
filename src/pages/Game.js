import React, {useEffect, useCallback, useState} from 'react';
import data from '../cards.json'
import './game.scss'

//Components
import HandDeck from '../components/inGame/HandDeck'
import StockCard from '../components/inGame/StockCard'

export default Game => {

  const [stock, setStock] = useState(null)

  //King Card
  var _chiefCard;

  // Get faction and cards deck
  var getFaction = localStorage.getItem('faction');
  var getCards = localStorage.getItem(getFaction);

  var cards = getCards ? getCards.split(',') : window.location.pathname = '/class';

  //Stock cards
  console.log(getCards)

  //Shuffle cards
  var j, x, i;
  for (i = cards.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = cards[i];
    cards[i] = cards[j];
    cards[j] = x;
  }

  //Concat Neutral card and choosen faction
  var concatData = data.Neutre.concat(data[getFaction])

  //List of KingIds
  var idKings = ["33", "34", "76", "77", "78", "79", "120", "121", "122", "123", "161", "162", "163", "164", "202", "203", "204", "205"]

  //remove king card from shuffled array
  cards.map(card => {
    if (idKings.includes(card)) {
      _chiefCard = card;
      const index = cards.indexOf(card);
      cards.splice(index, 1);
    }
  })

  return (
    <div className="game">
      <div  className="score"></div>
      <div className="gameArea">
        <HandDeck shuffledCards={cards} concatData={concatData}/>
      </div>
      <div className="stockCard">
        <StockCard faction={getFaction} stock={stock}/>
      </div>
    </div>
  );
}
