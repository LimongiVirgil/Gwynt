import React, {useState} from 'react';
import './CardList.scss'

//////// Register card in localhost ////////

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

//////// Display List Card ////////

function CardList(props) {
	const [open, setOpen] = useState(false);
	const [idc, setIdc] = useState(null);

	// Get faction
	let factionName = props.faction

	// Get the existing data
	var existing = localStorage.getItem(factionName);

	// If no existing data, create an array
	// Otherwise, convert the localStorage string to an array
	existing = existing ? existing.split(',') : [];

	////// Display info Card //////

	const infoCard = (e) => {
		setIdc(e.target.id)
		setOpen(!open)
		e.preventDefault()
		console.log(e.target.id)
	}

	return(
		<div className={props.faction + " faction"}>
			{props.data.map((card, index) =>
				existing.includes(card.id.toString()) ? null : <img key={index} id={card.id} onDoubleClick={cardClick} onContextMenu={infoCard} src={card.image_url} alt="carte" />
			)}
			{open === true &&
				props.data.map((card, index) => {
					if (card.id.toString() === idc) {
						return( 
							<div key={index} onClick={() => setOpen(!open)} className="infoCard">
								<img src={card.image_url} alt="carte" />
								{card.description && <p>{card.description}</p>}
							</div>
						)
					}
					return false
				})
			}
		</div>
	)
}

export default CardList