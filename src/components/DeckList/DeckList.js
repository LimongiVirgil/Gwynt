import React, { useState } from 'react';
import './DeckList.scss'

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
}

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
								{card.description && <p>{card.description}</p>}
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