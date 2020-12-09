import React, { useState } from 'react';
import './DeckList.scss'
import data from '../../cards.json'

function DeckList(props) {
	const [open, setOpen] = useState(false);
	const [idc, setIdc] = useState(null);

	const [openNeutre, setOpenNeutre] = useState(false);
	const [idcNeutre, setIdcNeutre] = useState(null);

	let parentClass = props.faction;
	
	var existing = localStorage.getItem(parentClass);

	// If no existing data, create an array
	// Otherwise, convert the localStorage string to an array
	existing = existing ? existing.split(',') : [];

	////// Display info Card //////

	const infoCard = (e) => {
		setIdc(e.target.id)
		setOpen(!open)
		e.preventDefault()
	}

	const infoCardNeutre = (e) => {
		setIdcNeutre(e.target.id)
		setOpenNeutre(!openNeutre)
		e.preventDefault()
	}

	////////////////////////////////

	const deckClick = (e) => {
		// Get name of faction
		let parentClass = e.target.parentNode.className.split(' ')[0];
	
		// Get card list
		let deck = document.querySelector(`.deck .${parentClass}.faction`)
		let cardD = document.querySelector(`.mainDeck .${parentClass}.faction`)
	
		// Get the existing data
		var existing = localStorage.getItem(parentClass);
	
		// If no existing data, create an array
		// Otherwise, convert the localStorage string to an array
		existing = existing ? existing.split(',') : [];
	
		const index = existing.indexOf(e.target.id);
	
		// remove 1 to infocard unit when a card is remove
		var unite = document.querySelector(`.${parentClass} .unites`)
		var powerUnite = document.querySelector(`.${parentClass} .power`)
		var heroe = document.querySelector(`.${parentClass} .count`)
		var cardUnite = document.querySelector(`.${parentClass} .existing`)
		var special = document.querySelector(`.${parentClass} .speciales`)

		var separator = special.innerHTML.indexOf(' ');
	
		props.data.map((card) => {
			if (e.target.id === card.id.toString() && existing.includes(card.id.toString())) {
				if (!card.special && card.effect1 !== "heroe" && card.effect1 !== "king") {
					unite.innerHTML = Number(unite.innerHTML) - 1;
				}
				if (card.effect1 === "heroe") {
					heroe.innerHTML = Number(heroe.innerHTML) - 1
				}
				if (card.special) {
					special.innerHTML = Number(special.innerHTML.substr(0, separator)) - 1 + " / 10"
				}
				cardUnite.innerHTML = Number(cardUnite.innerHTML) - 1
				powerUnite.innerHTML = Number(powerUnite.innerHTML) - card.power
				
				if (index > -1) {
					existing.splice(index, 1);
				}
			
				// Save back to localStorage
				localStorage.setItem(parentClass, existing.toString());
			
				// Add select card to deck list
				deck.append(e.target)

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

			} else if (e.target.id === card.id.toString()) {
				if (!card.special && card.effect1 !== "heroe" && card.effect1 !== "king") {
					unite.innerHTML = Number(unite.innerHTML) + 1;
				}
				if (card.effect1 === "heroe") {
					heroe.innerHTML = Number(heroe.innerHTML) + 1
				}
				if (card.special) {
					special.innerHTML = Number(special.innerHTML.substr(0, separator)) + 1 + " / 10"
				}
				cardUnite.innerHTML = Number(cardUnite.innerHTML) + 1
				powerUnite.innerHTML = Number(powerUnite.innerHTML) + card.power

				// Add new data to localStorage Array
				existing.push(e.target.id);

				// Save back to localStorage
				localStorage.setItem(parentClass, existing.toString());
				
				cardD.append(e.target)

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
			}
		})

		data.Neutre.map((card) => {
			if (e.target.id === card.id.toString() && existing.includes(card.id.toString())) {
				if (!card.special && card.effect1 !== "heroe" && card.effect1 !== "king") {
					unite.innerHTML = Number(unite.innerHTML) - 1;
				}
				if (card.effect1 === "heroe") {
					heroe.innerHTML = Number(heroe.innerHTML) - 1
				}
				if (card.special) {
					special.innerHTML = Number(special.innerHTML.substr(0, separator)) - 1 + " / 10"
				}
				cardUnite.innerHTML = Number(cardUnite.innerHTML) - 1
				powerUnite.innerHTML = Number(powerUnite.innerHTML) - card.power
				
				if (index > -1) {
					existing.splice(index, 1);
				}
			
				// Save back to localStorage
				localStorage.setItem(parentClass, existing.toString());
			
				// Add select card to deck list
				deck.append(e.target)

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

			} else if (e.target.id === card.id.toString()) {
				if (!card.special && card.effect1 !== "heroe" && card.effect1 !== "king") {
					unite.innerHTML = Number(unite.innerHTML) + 1;
				}
				if (card.effect1 === "heroe") {
					heroe.innerHTML = Number(heroe.innerHTML) + 1
				}
				if (card.special) {
					special.innerHTML = Number(special.innerHTML.substr(0, separator)) + 1 + " / 10"
				}
				cardUnite.innerHTML = Number(cardUnite.innerHTML) + 1
				powerUnite.innerHTML = Number(powerUnite.innerHTML) + card.power

				// Add new data to localStorage Array
				existing.push(e.target.id);

				// Save back to localStorage
				localStorage.setItem(parentClass, existing.toString());

				cardD.append(e.target)

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
			}
		})
	}

	return(
		<div active={props.active} className={props.faction + ' faction'}>
			{data.Neutre.map((card, index) =>
				existing.includes(card.id.toString()) ? <img key={index} onDoubleClick={deckClick} onContextMenu={infoCardNeutre} id={card.id} src={card.image_url} alt="carte" /> : null
			)}
			{props.data.map((card, index) =>
				(existing.includes(card.id.toString()) && card.effect1 != "king") ? <img key={index} onDoubleClick={deckClick} onContextMenu={infoCard} id={card.id} src={card.image_url} alt="carte" /> : null
			)}
			{open === true &&
				props.data.map((card, index) => {
					if (card.id.toString() === idc) {
						return( 
							<div key={index} onClick={() => setOpen(!open)} className="infoCard">
								<img src={card.image_url} alt="carte" />
								<div href="#" className="close" />
								{ card.description1 &&
									<div className="infoCardText">
										{card.nameEffect && <p>{card.nameEffect}</p>}
										{card.description1 && <p>{card.description1}</p>}
										{card.description2 && <p>{card.description2}</p>}
									</div>
								}
							</div>
						)
					}
					return false
				})
			}
			{openNeutre === true &&
				data.Neutre.map((card, index) => {
					if (card.id.toString() === idcNeutre) {
						return( 
							<div key={index} onClick={() => setOpenNeutre(!openNeutre)} className="infoCard">
								<img src={card.image_url} alt="carte" />
								<div href="#" className="close" />
								{ card.description1 &&
									<div className="infoCardText">
										{card.nameEffect && <p>{card.nameEffect}</p>}
										{card.description1 && <p>{card.description1}</p>}
										{card.description2 && <p>{card.description2}</p>}
									</div>
								}
							</div>
						)
					}
					return false
				})
			}
		</div>
	)
}

export default DeckList