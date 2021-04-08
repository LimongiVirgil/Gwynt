import React, { useEffect, forwardRef } from 'react';
import { getFactionCards } from '../../tools/localStorageTools'

//Components
import KingList from '../KingList/KingList'

//Scss
import './InfoFaction.scss'

const InfoFaction = forwardRef((props, ref) => {
	
	useEffect(() => {
		// Get faction cards
		var existing = getFactionCards(props.faction);

		const nbCardInDeck = ref.uniteRef.current;
		const nbCombatCard = ref.cardUniteRef.current;
		const nbSpecialCard = ref.specialRef.current;
		const totalPowerCard = ref.powerUniteRef.current;
		const nbHeroeCard = ref.heroeRef.current;

		nbCardInDeck.innerText = 0;
		nbCombatCard.innerText = 0;
		nbSpecialCard.innerText = 0;
		totalPowerCard.innerText = 0;
		nbHeroeCard.innerText = 0;

		//Counting of card for the dashBoard
		props.cardsList.map((card) => {
			if (existing.includes(card.id.toString())) {
				nbCardInDeck.innerText = Number(nbCardInDeck.innerText) + 1;

				if (card.effect1 === "heroe") {
					nbHeroeCard.innerText = Number(nbHeroeCard.innerText) + 1;
				}
				if (card.special) {
					nbSpecialCard.innerText = Number(nbSpecialCard.innerText) + 1
				}
				if (!card.special && card.effect1 !== "heroe" && card.effect1 !== "king") {
					nbCombatCard.innerText = Number(nbCombatCard.innerText) + 1
				}
				totalPowerCard.innerText = Number(totalPowerCard.innerText) + card.power
			}

			return false;
		})

		if (Number(nbSpecialCard.innerText) === 10) {
			nbSpecialCard.style.color = "red";
			nbSpecialCard.nextSibling.style.color = "red";
		} else {
			nbSpecialCard.style.color = "white";
			nbSpecialCard.nextSibling.style.color = "white";
		}

		if (Number(nbCardInDeck.innerText) === 40) {
			nbCardInDeck.style.color = "red";
		} else {
			nbCardInDeck.style.color = "white";
		}
	});

	return(
		<div active={props.active} className={`${props.faction} faction`}>
			<KingList data={props.cardsList} kingData={props.kingData} faction={props.faction}/>
			<p className="infoTitle">Toutes les cartes du jeu</p>
			<p className="existing" ref={ref.uniteRef}></p>
			<p className="infoTitle">Nombre de cartes d'unités</p>
			<p className="unites" ref={ref.cardUniteRef}></p>
			<p className="infoTitle">Cartes Spéciales</p>
			<div className="specialesDiv">
				<p className="speciales" ref={ref.specialRef} ></p>
				<span> / 10</span>
			</div>
			<p className="infoTitle">Force total de la carte Unité</p>
			<p className="power" ref={ref.powerUniteRef}></p>
			<p className="infoTitle">Carte Héros</p>
			<p className="count" ref={ref.heroeRef}></p>
		</div>
	)
})

export default InfoFaction