import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import data from '../data/cards.json'

// Scss
import './game.scss'

// Tools
import { getRandomEnemyDeck } from '../tools/enemyDeck'
import { removeKing, shuffleCard } from '../tools/deckTools'

//Components
import HandDeck from '../components/inGame/HandDeck'
import StockCard from '../components/inGame/StockCard'
import KingCard from '../components/inGame/KingCard'

export default function Game() {
  const [stock, setStock] = useState(0)
  const [stockEnemy, setStockEnemy] = useState(0)

  let history = useHistory();

  //King Card
  var _chiefCard;

  // Get faction and cards deck
  var getFaction = localStorage.getItem('faction');
  var getCards = localStorage.getItem(getFaction);

  var cards = getCards ? getCards.split(',') : history.push("/class");

  var enemyDeck = getRandomEnemyDeck()

  //Shuffle cards
  shuffleCard(cards)
  var shuffledEnemyDeck = shuffleCard(enemyDeck.card);

  //Concat Neutral card and choosen faction
  var concatData = [...data.Neutre, ...data[getFaction]]
  var concatEnemyData = [...data.Neutre, ...data[enemyDeck.faction]]

  //List of KingIds
  var idKings = ["33", "34", "76", "77", "78", "79", "120", "121", "122", "123", "161", "162", "163", "164", "202", "203", "204", "205"]

  //remove king card from shuffled array
  _chiefCard = removeKing(cards, idKings, "idKing")
  removeKing(cards, idKings)
  
  useEffect(() => {
    localStorage.setItem('shuffledDeck', cards);
    var shuffledDeck = localStorage.getItem('shuffledDeck').split(',')

    localStorage.setItem('shuffledEnemyDeck', shuffledEnemyDeck);
    var shuffledEnemyDeckStorage = localStorage.getItem('shuffledEnemyDeck').split(',')

    setStock(shuffledDeck.length - 10)
    setStockEnemy(shuffledEnemyDeckStorage.length - 10)

  }, []);

  return (
    <div className="game">
      <div  className="score">
        <KingCard faction={enemyDeck.faction} idKing={enemyDeck.king} enemy='enemyKing'/>
        <KingCard faction={getFaction} idKing={_chiefCard}/>
      </div>
      <div className="gameArea">
        <HandDeck faction={enemyDeck.faction} shuffledCards={shuffledEnemyDeck} concatData={concatEnemyData} enemy='enemyHand'/>
        <HandDeck faction={getFaction} shuffledCards={cards} concatData={concatData}/>
      </div>
      <div className="stockCard">
        <StockCard faction={enemyDeck.faction} stock={stockEnemy} enemy='enemyStock'/>
        <StockCard faction={getFaction} stock={stock}/>
      </div>
    </div>
  );
};