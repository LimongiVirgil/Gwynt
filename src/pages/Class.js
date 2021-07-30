import React, {useEffect, useCallback, useRef, useState} from 'react';
import { useHistory } from "react-router-dom";
import data from '../data/cards.json'
import dataKing from '../data/kingId.json'

// Scss
import './class.scss'

// Tools
import { getFactionCards } from '../tools/localStorageTools'

// Components
import CardList from '../components/CardList/CardList'
import DeckList from '../components/DeckList/DeckList'
import InfoFaction from '../components/InfoFaction/InfoFaction'

export default function Class() {
  const [cardFaction, setCardFaction] = useState("Nordling")
  const [mainDeck, setMainDeck] = useState([])
  const [handDeck, setHandDeck] = useState([])
  const [cardsList, setCardsList] = useState([])

  const popup = useRef(null)
  const nordling = useRef(null);
  const nilfgaard = useRef(null);
  const scoiaTael = useRef(null);
  const monstres = useRef(null);
  const skellige = useRef(null);

  const uniteRef = useRef(null);
  const powerUniteRef = useRef(null);
  const heroeRef = useRef(null)
  const cardUniteRef = useRef(null)
  const specialRef = useRef(null)

  const refsInfoFaction = {
    uniteRef, powerUniteRef, heroeRef, cardUniteRef, specialRef
  }

  let history = useHistory();
  
  useEffect(() => {
    //keyCode listener
    document.addEventListener("keydown", enterFunction, false);

    // Merge faction cards list with neutral cards list
    const mergedArrays = [...data.Neutre, ...data[cardFaction]];
	  setCardsList(mergedArrays);

    //sortCards(mergedArrays)

    return () => {
      document.removeEventListener("keydown", enterFunction, false);
    };
  }, [cardFaction, mainDeck, handDeck]);

  //If deck is completed start the game
  const play = (faction) => {
    var existing = getFactionCards(faction);

    if (existing.length >= 25 && existing.length <= 40) {
      localStorage.setItem("faction", faction);
      history.push("/game");
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

  //Sort cards
  var handCards = getFactionCards(cardFaction);

  // const sortCards = (cards) => {
  //   if (handDeck.length === 0 || mainDeck.length === 0) {
  //     var arrHandDeck = [...handDeck];
  //     var arrMainDeck = [...mainDeck];
    
  //     cards.forEach((card) => {
  //       if (handCards.includes(String(card.id)) && card.effect1 !== 'king') {
  //         arrHandDeck.push(card)
  //       } else if (card.effect1 !== 'king') {
  //         arrMainDeck.push(card)
  //       }
  //     })
    
  //     setHandDeck(arrHandDeck)
  //     setMainDeck(arrMainDeck)
  //   }
  // }

  const cardClick = (e, factionName, addingCard) => {

		// Get the existing data
		var existing = localStorage.getItem(factionName);

		// If no existing data, create an array
		// Otherwise, convert the localStorage string to an array
		existing = existing ? existing.split(',') : [];

		const nbSpecialCard = specialRef.current;

		var addCard = true

		if (!addingCard) {
			//card.append(e.target)

			const index = existing.indexOf(e.target.id);
			if (index > -1) {
				existing.splice(index, 1);
			}

			// Save back to localStorage
			localStorage.setItem(factionName, existing.toString());

      const newArrHandDeck = [...handDeck];
      const newArrMainDeck = [...mainDeck];

      cardsList.forEach((card) => {
        if (String(card.id) === e.target.id) {
          newArrMainDeck.push(card)
          newArrHandDeck.splice(newArrHandDeck.indexOf(card, 1))
        }
      })

      setHandDeck(newArrHandDeck)
      setMainDeck(newArrMainDeck)

		} else {
			if (nbSpecialCard.innerText === "10") {
				data.Neutre.forEach((card) => {
					if (e.target.id === card.id.toString() && (card.effect1 === "meteo" || card.effect1 ===  "chargeRing" || card.effect1 ===  "destroy" || card.effect1 ===  "lure")) {
						addCard = false;
					}
				})
			}

			if (addCard) {

				if (existing.length < 40) {
					// Add new data to localStorage Array
					existing.push(e.target.id);

					// Save back to localStorage
					localStorage.setItem(factionName, existing.toString());

					// Add select card to deck list
          const newArrHandDeck = [...handDeck];
          const newArrMainDeck = [...mainDeck];

          cardsList.forEach((card) => {
            if (String(card.id) === e.target.id) {
              newArrMainDeck.splice(newArrMainDeck.indexOf(card, 1))
              newArrHandDeck.push(card)
            }
          })

          setHandDeck(newArrHandDeck)
          setMainDeck(newArrMainDeck)
				}
			}

			addCard = true;
		}
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
          <CardList cardsList={cardsList} kingData={dataKing[cardFaction]} cardClick={cardClick} faction={cardFaction}/>
        </div>
        <div className="infoDeck">
          <InfoFaction
            cardsList={cardsList}
            kingData={dataKing[cardFaction]} 
            faction={cardFaction}
            ref={refsInfoFaction}
          />
        </div>
        <div className="mainDeck">
          <h2>Cartes du jeu</h2>
          <DeckList cardsList={cardsList} faction={cardFaction} cardClick={cardClick}/>
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