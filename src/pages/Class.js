import React, {useEffect, useCallback, useRef, useState} from 'react';
import data from '../cards.json'
import dataKing from '../kingId.json'

//Tools
import { getFactionCards } from '../tools/localStorageTools'

//Components
import CardList from '../components/CardList/CardList'
import DeckList from '../components/DeckList/DeckList'
import InfoFaction from '../components/InfoFaction/InfoFaction'

export default function Class() {
  const [cardFaction, setCardFaction] = useState("Nordling")

  const popup = useRef(null)
  const nordling = useRef(null);
  const nilfgaard = useRef(null);
  const scoiaTael = useRef(null);
  const monstres = useRef(null);
  const skellige = useRef(null);

  const currentFaction = useRef(null);
  
  //keyCode listener
  useEffect(() => {
    document.addEventListener("keydown", enterFunction, false);

    return () => {
      document.removeEventListener("keydown", enterFunction, false);
    };
  });

  //If deck is completed start the game
  const play = (faction) => {
      var existing = getFactionCards(faction);

      if (existing.length >= 25 && existing.length <= 40) {
        localStorage.setItem("faction", faction);
        window.location.pathname = '/game'
      } else {
        popup.current.style.display = "block"
      }
  }

  //keyCode 
  const enterFunction = useCallback((e) => {
    if(e.keyCode === 13) {
      play(cardFaction)
    }
  }, [cardFaction]);

  //Change faction
  function handleClickClass(factionName) {
    setCardFaction(factionName.attributes['faction'].value)
  }

  return (
    <div className="classe">
      <ul className="factionName">
        <li ref={nordling} className="Nordling li" faction="Nordling" onClick={() => handleClickClass(nordling.current) }>Royaume du Nord</li>
        <li ref={nilfgaard} className="Nilfgaard li" faction="Nilfgaard" onClick={ () => handleClickClass(nilfgaard.current) }>Empire de Nilfgaard</li>
        <li ref={scoiaTael} className="ScoiaTael li" faction="ScoiaTael" onClick={ () => handleClickClass(scoiaTael.current) }>Scoia'Tael</li>
        <li ref={monstres} className="Monstres li" faction="Monstres" onClick={ () => handleClickClass(monstres.current) }>Monstres</li>
        <li ref={skellige} className="Skellige li" faction="Skellige" onClick={ () => handleClickClass(skellige.current) }>Skellige</li>
      </ul>
      <div className="mainContainer">
        <div className="deck">
          <h2>Collection de cartes</h2>
          <CardList ref={currentFaction} data={data[cardFaction]} kingData={dataKing[cardFaction]}  faction={cardFaction}/>
        </div>
        <div className="infoDeck">
          <InfoFaction data={data[cardFaction]} kingData={dataKing[cardFaction]} faction={cardFaction}/>
        </div>
        <div className="mainDeck">
          <h2>Cartes du jeu</h2>
          <DeckList data={data[cardFaction]} faction={cardFaction}/>
        </div>
      </div>
      <div className="command">
        <img src="./images/mouseRight.svg" alt="mouse right click" />
        <p>Infos Cartes</p>
        <div>Enter</div>
        <p>Pour commencer</p>
      </div>
      <div ref={popup} className="warning" onClick={() => popup.current.style.display = "none"}>
        <div href="#" className="close" />
        <div className="border">
          <p>Votre deck doit contenir entre 25 et 40 cartes</p>
        </div>
      </div>
    </div>
  );
};