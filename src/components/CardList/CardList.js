import React from 'react';
import './CardList.scss'

const cardClick = (e) => {
	// Get name of faction
	let parentClass = e.target.parentNode.className.split(' ')[0];

	// Get deck list
	let deck = document.querySelector(`.mainDeck .${parentClass}.faction`)
	//Get card list
	let card = document.querySelector(`.deck .${parentClass}.faction`)

	// Get the existing data
	var existing = localStorage.getItem(parentClass);

	// If no existing data, create an array
	// Otherwise, convert the localStorage string to an array
	existing = existing ? existing.split(',') : [];

	if (e.detail === 2) {
		if (e.target.parentNode.parentNode.className === "mainDeck") {
			card.append(e.target)

			const index = existing.indexOf(e.target.id);
			if (index > -1) {
				existing.splice(index, 1);
			}

			// Save back to localStorage
			localStorage.setItem(parentClass, existing.toString());
		} else {
			// Add new data to localStorage Array
			existing.push(e.target.id);

			// Save back to localStorage
			localStorage.setItem(parentClass, existing.toString());

			// Add select card to deck list
			deck.append(e.target)
		}
	}

}

function CardList(props) {
	// Get faction
	let factionName = props.faction

	// Get the existing data
	var existing = localStorage.getItem(factionName);

	// If no existing data, create an array
	// Otherwise, convert the localStorage string to an array
	existing = existing ? existing.split(',') : [];

	return(
		<div className={props.faction + " faction"}>
			{props.data.map((card, index) =>
				existing.includes(card.id.toString()) ? null : <img key={index} id={card.id} onClick={cardClick} src={card.image_url} alt="carte" />
			)}
		</div>
	)
}

export default CardList