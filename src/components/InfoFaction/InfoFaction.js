import React, {useRef, useEffect, forwardRef} from 'react';
import { getFactionCards } from '../../tools/localStorageTools'

import data from '../../cards.json'
import KingList from '../KingList/KingList'

import './InfoFaction.scss'

const InfoFaction = forwardRef((props, ref) => {

	var count = 0;
	var power = 0;
	var speciales = 0;
	var unites = 0;

	useEffect(() => {
		if (speciales === 10) {
			ref.specialRef.current.style.color = "red";
		}
		if (ref.uniteRef.length === 40) {
			ref.uniteRef.current.style.color = "red";
		}

		console.log(ref.powerUniteRef.current.innerText)
	});

	// Get faction cards
	var existing = getFactionCards(props.faction);

	// Merge faction cards list with neutral cards list
	const cardsList = [...data.Neutre, ...props.data];

	//Counting of card for the dashBoard

	cardsList.map((card) => {
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

		return false;
	})
	

	/* const specialRef = useRef(0);
	const existingRef = useRef(0);


	var count = 0;
	var power = 0;
	var speciales = 0;
	var unites = 0;

	useEffect(() => {
		if (speciales === 10) {
			specialRef.current.style.color = "red";
		}
		if (existing.length === 40) {
			existingRef.current.style.color = "red";
		}
	});

	// Get faction cards
	var existing = getFactionCards(props.faction);

	//Counting of card for the dashBoard
	const countingCards = (deck) => {
		deck.map((card) => {
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

			return false;
		})
	}

	countingCards(props.data);
	countingCards(data.Neutre);
 */
	return(
		<div active={props.active} className={props.faction + ' faction'}>
			<KingList data={props.data} kingData={props.kingData} faction={props.faction}/>
			<p className="infoTitle">Toutes les cartes du jeu</p>
			<p className="existing" ref={ref.uniteRef}>{existing.length}</p>
			<p className="infoTitle">Nombre de cartes d'unités</p>
			<p className="unites" ref={ref.cardUniteRef}>{unites}</p>
			<p className="infoTitle">Cartes Spéciales</p>
			<p className="speciales" ref={ref.specialRef} >{speciales} / 10</p>
			<p className="infoTitle">Force total de la carte Unité</p>
			<p className="power" ref={ref.powerUniteRef}>0</p>
			<p className="infoTitle">Carte Héros</p>
			<p className="count" ref={ref.heroeRef}>{count}</p>
		</div>
	)
})

export default InfoFaction