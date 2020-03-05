import React from 'react';
import './KingList.scss'

function KingList(props) {
	let parentClass = props.faction;

	return(
		<div className={props.faction + ' faction'}>
			{props.data.map((card, index) =>
				existing.includes(card.id.toString()) ? <img key={index} onClick={deckClick} id={card.id} src={card.image_url} alt="carte" /> : null
			)}
		</div>
	)
}

export default KingList