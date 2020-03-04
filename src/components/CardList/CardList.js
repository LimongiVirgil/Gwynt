import React from 'react';
import './CardList.scss'

const cardClick = (e) => {
	// Get name of faction
	let parentClass = e.target.parentNode.className.split(' ')[0];

	// Get the existing data
	var existing = localStorage.getItem(parentClass);

	// If no existing data, create an array
	// Otherwise, convert the localStorage string to an array
	existing = existing ? existing.split(',') : [];

	if (e.detail === 2) {
		e.target.style.display = 'none'

		// Add new data to localStorage Array
		existing.push(e.target.id);

		// Save back to localStorage
		localStorage.setItem(parentClass, existing.toString());
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