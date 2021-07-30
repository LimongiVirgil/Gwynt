import React, { useState } from 'react';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './CardList.scss'

//Tools
import { getFactionCards } from '../../tools/localStorageTools';

//Components
import InfoCards from '../InfoCards/InfoCards'

function CardList(props) {
	const [open, setOpen] = useState(false);
	const [idc, setIdc] = useState(null);

	// Get faction and cards list
	let factionName = props.faction
	var existing = getFactionCards(factionName)

	// Add by default a king
	if (props.kingData.every(king => !existing.includes(king))) {
		existing.push(props.kingData[0])
	}
	localStorage.setItem(factionName, existing.toString());

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
				(existing.includes(card.id.toString()) || card.effect1 === "king") ? 
					null : 
					<LazyLoadImage 
						key={index}
						id={card.id}
						effect="blur"
						scrollPosition={props.scrollPosition}
						onDoubleClick={(e) => props.cardClick(e, factionName, true)}
						onContextMenu={infoCard}
						src={card.image_url}
						alt="carte"
					/>
			)}
			{ open === true && 
				<InfoCards cards={props.cardsList} idCard={idc} closeInfo={closeInfoCard}/>
			}
		</div>
	)
}

export default trackWindowScroll(CardList)