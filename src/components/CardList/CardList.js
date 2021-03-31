import React, { useState } from 'react';
import './CardList.scss'
import data from '../../cards.json'

//Tools
import { getFactionCards } from '../../tools/localStorageTools';

//Components
import InfoCards from '../InfoCards/InfoCards'

function CardList(props) {
	const [open, setOpen] = useState(false);
	const [idc, setIdc] = useState(null);

	// Get faction and cards list
	let factionName = props.faction
	var existing = getFactionCards(factionName)

	// Add by default a king
	if (props.kingData.every(king => !existing.includes(king))) {
		existing.push(props.kingData[0])
	}
	localStorage.setItem(factionName, existing.toString());

	// Merge faction cards list with neutral cards list
	const cardsList = [...data.Neutre, ...props.data];

	////// Display info Card //////

	const infoCard = (e) => {
		setIdc(e.target.id)
		setOpen(!open)

		e.preventDefault()
	}

	const closeInfoCard = (e) => {
		setOpen(!open)
		console.log('heelo')
	}

	//////// Register card in localhost ////////

	const cardClick = (e) => {
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

	return(
		<div active={props.active} className={`${props.faction} faction`}>
			{cardsList.map((card, index) =>
				(existing.includes(card.id.toString()) || card.effect1 === "king") ? 
					null : 
					<img 
						key={index} 
						id={card.id} 
						onDoubleClick={cardClick} 
						onContextMenu={infoCard} 
						src={card.image_url} 
						alt="carte"
					/>
			)}
			{ open === true && 
				<InfoCards cards={cardsList} idCard={idc} closeInfo={closeInfoCard}/>
			}
		</div>
	)
}

export default CardList