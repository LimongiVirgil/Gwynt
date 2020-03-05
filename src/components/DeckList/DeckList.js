import React from 'react';
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

	if (e.detail === 2) {

		const index = existing.indexOf(e.target.id);
		if (index > -1) {
			existing.splice(index, 1);
		}

		// Save back to localStorage
		localStorage.setItem(parentClass, existing.toString());

		// Add select card to deck list
		deck.append(e.target)
	}
}

function DeckList(props) {
	let parentClass = props.faction;
	
	var existing = localStorage.getItem(parentClass);

	// If no existing data, create an array
	// Otherwise, convert the localStorage string to an array
	existing = existing ? existing.split(',') : [];

	console.log(existing)

	return(
		<div className={props.faction + ' faction'}>
			{props.data.map((card, index) =>
				existing.includes(card.id.toString()) ? <img key={index} onClick={deckClick} id={card.id} src={card.image_url} alt="carte" /> : null
			)}
		</div>
	)
}

export default DeckList