import React, { useState } from 'react';
import './DeckList.scss'

function DeckList(props) {
	const [open, setOpen] = useState(false);
	const [idc, setIdc] = useState(null);

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
		console.log(e.target.id)
	}

	const deckClick = (e) => {
		// Get name of faction
		let parentClass = e.target.parentNode.className.split(' ')[0];
	
		// Get card list
		let deck = document.querySelector(`.deck .${parentClass}.faction`)
	
		// Get the existing data
		var existing = localStorage.getItem(parentClass);
	
		// If no existing data, create an array
		// Otherwise, convert the localStorage string to an array
		existing = existing ? existing.split(',') : [];
	
		const index = existing.indexOf(e.target.id);
		if (index > -1) {
			existing.splice(index, 1);
		}
	
		// Save back to localStorage
		localStorage.setItem(parentClass, existing.toString());
	
		// Add select card to deck list
		deck.append(e.target)
	
		// remove 1 to infocard unit when a card is remove
		var unite = document.querySelector('.unites')
		var powerUnite = document.querySelector('.power')
		var heroe = document.querySelector('.count')
		var cardUnite = document.querySelector('.existing')
		var special = document.querySelector('.speciales')
	
		props.data.map((card) => {
			if (e.target.id === card.id.toString()) {
				if (!card.special && card.effect1 !== "heroe" && card.effect1 !== "king") {
					unite.innerHTML = Number(unite.innerHTML) - 1;
				}
				if (card.effect1 === "heroe") {
					heroe.innerHTML = Number(heroe.innerHTML) - 1
				}
				if (card.special) {
					special.innerHTML = Number(special.innerHTML) - 1
				}
				cardUnite.innerHTML = Number(cardUnite.innerHTML) - 1
				powerUnite.innerHTML = Number(powerUnite.innerHTML) - card.power
			}
		})
	}

	return(
		<div className={props.faction + ' faction'}>
			{props.data.map((card, index) =>
				existing.includes(card.id.toString()) ? <img key={index} onDoubleClick={deckClick} onContextMenu={infoCard} id={card.id} src={card.image_url} alt="carte" /> : null
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
		</div>
	)
}

export default DeckList