import React from 'react';
import './DeckList.scss'

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
				existing.includes(card.id.toString()) ? <img key={index} id={card.id} src={card.image_url} alt="carte" /> : null
			)}
		</div>
	)
}

export default DeckList