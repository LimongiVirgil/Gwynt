import React, {useRef} from 'react';
import './InfoFaction.scss'
import data from '../../cards.json'

function InfoFaction(props) {
	var count = 0;
	var power = 0;
	var speciales = 0;
	var unites = 0;

	// Get the existing data
	var existing = localStorage.getItem(props.faction);

	// If no existing data, create an array
	// Otherwise, convert the localStorage string to an array
	existing = existing ? existing.split(',') : [];

	var special = document.querySelector(`.${props.faction} .speciales`)

	//var special = useRef(null);

	console.log(special)

	//Count number of heroe in deck
	props.data.map((card, index) => {
		if (existing.includes(card.id.toString())) {
			if (card.effect1 === "heroe") {
				count = count + 1
			}
			if (card.special) {
				speciales = speciales + 1
			}
			if (!card.special && card.effect1 !== "heroe" && card.effect1 !== "king") {
				unites = unites + 1
			}
			power = power + card.power
		}
	})
	data.Neutre.map((card, index) => {
		if (existing.includes(card.id.toString())) {
			if (card.effect1 === "heroe") {
				count = count + 1
			}
			if (card.special) {
				speciales = speciales + 1
			}
			if (!card.special && card.effect1 !== "heroe" && card.effect1 !== "king") {
				unites = unites + 1
			}
			power = power + card.power
		}
		
		if (speciales === 10) {
			//special.style.color = "red"
		}
	})

	return(
		<div className={props.faction + ' faction'}>
			<p className="infoTitle">Toutes les cartes du jeu</p>
			<p className="existing">{existing.length}</p>
			<p className="infoTitle">Nombre de cartes d'unités</p>
			<p className="unites">{unites}</p>
			<p className="infoTitle">Cartes Spéciales</p>
			<p className="speciales" ref={special}>{speciales} / 10</p>
			<p className="infoTitle">Force total de la carte Unité</p>
			<p className="power">{power}</p>
			<p className="infoTitle">Carte Héros</p>
			<p className="count">{count}</p>
		</div>
	)
}

export default InfoFaction