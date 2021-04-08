import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './DeckList.scss'

// Tools
import { getFactionCards } from '../../tools/localStorageTools'

// Components
import InfoCards from '../InfoCards/InfoCards'

function DeckList(props) {
	const [open, setOpen] = useState(false);
	const [idc, setIdc] = useState(null);

	let parentClass = props.faction;

	// If no existing data, create an array
	// Otherwise, convert the localStorage string to an array
	var existing = getFactionCards(parentClass);

	// Display info Card
	const infoCard = (e) => {
		setIdc(e.target.id)
		setOpen(!open)
		
		e.preventDefault()
	}

	const closeInfoCard = (e) => {
		setOpen(!open)
	}

	return(
		<div active={props.active} className={`${props.faction} faction`}>
			{props.cardsList.map((card, index) =>
				(existing.includes(card.id.toString()) && card.effect1 !== "king") ? 
				<LazyLoadImage 
					key={index} 
					onDoubleClick={(e) => props.cardClick(e, parentClass, false)} 
					onContextMenu={infoCard}
					effect="blur"
					id={card.id} 
					src={card.image_url} 
					alt="carte" 
				/> : 
					null
			)}
			{ open === true && 
				<InfoCards cards={props.cardsList} idCard={idc} closeInfo={closeInfoCard}/>
			}
		</div>
	)
}

export default DeckList