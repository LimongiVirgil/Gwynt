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

  const uniteRef = useRef(null);
  const powerUniteRef = useRef(null);
  const heroeRef = useRef(null)
  const cardUniteRef = useRef(null)
  const specialRef = useRef(null)

  const refsInfoFaction = {
    uniteRef, powerUniteRef, heroeRef, cardUniteRef, specialRef
  }
  
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

  //////////////////////////////////////

  const cardClick = (e, factionName, cardsList) => {
		// Get deck list
		let deck = document.querySelector(`.mainDeck .${factionName}.faction`)
		//Get card list
		let card = document.querySelector(`.deck .${factionName}.faction`)

		// Get the existing data
		var existing = localStorage.getItem(factionName);

		// If no existing data, create an array
		// Otherwise, convert the localStorage string to an array
		existing = existing ? existing.split(',') : [];

		var unite = document.querySelector(`.${factionName} .unites`)
		var powerUnite = document.querySelector(`.${factionName} .power`)
		var heroe = document.querySelector(`.${factionName} .count`)
		var cardUnite = document.querySelector(`.${factionName} .existing`)
		var special = document.querySelector(`.${factionName} .speciales`)

		var separator = special.innerHTML.indexOf(' ');

		var addCard = true

		if (e.target.parentNode.parentNode.className === "mainDeck") {
			card.append(e.target)

			const index = existing.indexOf(e.target.id);
			if (index > -1) {
				existing.splice(index, 1);
			}

			// Save back to localStorage
			localStorage.setItem(factionName, existing.toString());

			// Add 1 to infocard unit when a card is choose
			cardsList.forEach((card) => {
				if (e.target.id === card.id.toString()) {
					if (!card.special && card.effect1 !== "heroe" && card.effect1 !== "king") {
						unite.innerHTML = Number(unite.innerHTML) - 1;
					}
					if (card.effect1 === "heroe") {
						heroe.innerHTML = Number(heroe.innerHTML) - 1
					}
					if (card.special) {
						special.innerHTML = Number(special.innerHTML.substr(0, separator)) - 1 + " / 10"
					}
					powerUnite.innerHTML = Number(powerUnite.innerHTML) - card.power
					cardUnite.innerHTML = Number(cardUnite.innerHTML) - 1
				}

				if (special.innerHTML === "10 / 10") {
					special.style.color = "red"
				} else {
					special.style.color = "white"
				}
				if (cardUnite.innerHTML === '40') {
					cardUnite.style.color = 'red'
				} else {
					cardUnite.style.color = "white"
				}
			})
		} else {
			if (special.innerHTML === "10 / 10") {
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
					deck.append(e.target)

					// Add 1 to infocard unit when a card is choose
					cardsList.forEach((card) => {
						if (e.target.id === card.id.toString()) {
							if (!card.special && card.effect1 !== "heroe" && card.effect1 !== "king") {
								unite.innerHTML = Number(unite.innerHTML) + 1;
							}
							if (card.effect1 === "heroe") {
								heroe.innerHTML = Number(heroe.innerHTML) + 1
							}
							if (card.special) {
								special.innerHTML = Number(special.innerHTML.substr(0, separator)) + 1 + " / 10"
							}
							powerUnite.innerHTML = Number(powerUnite.innerHTML) + card.power
							cardUnite.innerHTML = Number(cardUnite.innerHTML) + 1
						}

						if (special.innerHTML === "10 / 10") {
							special.style.color = "red"
						} else {
							special.style.color = "white"
						}
						if (cardUnite.innerHTML === '40') {
							cardUnite.style.color = 'red'
						} else {
							cardUnite.style.color = "white"
						}
					})
				}
			}

			addCard = true;
		}
	}

  /////////////////////////////////////

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
          <CardList data={data[cardFaction]} kingData={dataKing[cardFaction]} cardClick={cardClick} faction={cardFaction}/>
        </div>
        <div className="infoDeck">
          <InfoFaction 
            data={data[cardFaction]} 
            kingData={dataKing[cardFaction]} 
            faction={cardFaction}
            ref={refsInfoFaction}
          />
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