import React from 'react';
import './InfoFaction.scss'

function InfoFaction(props) {
	// Get the existing data
	var existing = localStorage.getItem(props.faction);

	// If no existing data, create an array
	// Otherwise, convert the localStorage string to an array
	existing = existing ? existing.split(',') : [];

	return(
		<div className={props.faction + ' faction'}>
			<p>Toutes les cartes du jeu</p>
			<p>{existing.length}</p>
		</div>
	)
}

export default InfoFaction