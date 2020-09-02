import React, {useState} from 'react';
import './CardList.scss'
import data from '../../cards.json'

function CardList(props) {
	const [open, setOpen] = useState(false);
	const [idc, setIdc] = useState(null);

	const [openNeutre, setOpenNeutre] = useState(false);
	const [idcNeutre, setIdcNeutre] = useState(null);

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
	}

	const infoCardNeutre = (e) => {
		setIdcNeutre(e.target.id)
		setOpenNeutre(!openNeutre)
		e.preventDefault()
	}

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

		var unite = document.querySelector(`.${parentClass} .unites`)
		var powerUnite = document.querySelector(`.${parentClass} .power`)
		var heroe = document.querySelector(`.${parentClass} .count`)
		var cardUnite = document.querySelector(`.${parentClass} .existing`)
		var special = document.querySelector(`.${parentClass} .speciales`)

		var separator = special.innerHTML.indexOf(' ');

		if (e.target.parentNode.parentNode.className === "mainDeck") {
			card.append(e.target)

			const index = existing.indexOf(e.target.id);
			if (index > -1) {
				existing.splice(index, 1);
			}

			// Save back to localStorage
			localStorage.setItem(parentClass, existing.toString());

			// Add 1 to infocard unit when a card is choose
			props.data.map((card) => {
				if (e.target.id === card.id.toString()) {
					if (!card.special && card.effect1 !== "heroe" && card.effect1 !== "king") {
						unite.innerHTML = Number(unite.innerHTML) - 1;
					}
					if (card.effect1 === "heroe") {
						heroe.innerHTML = Number(heroe.innerHTML) - 1
					}
					if (card.special) {
						special.innerHTML = Number(special.innerHTML.substr(0, separator)) - 1 + " / 10"
					}
					powerUnite.innerHTML = Number(powerUnite.innerHTML) - card.power
					cardUnite.innerHTML = Number(cardUnite.innerHTML) - 1
				}

				if (special.innerHTML === "10 / 10") {
					special.style.color = "red"
				} else {
					special.style.color = "white"
				}
			})
			data.Neutre.map((card) => {
				if (e.target.id === card.id.toString()) {
					if (!card.special && card.effect1 !== "heroe" && card.effect1 !== "king") {
						unite.innerHTML = Number(unite.innerHTML) - 1;
					}
					if (card.effect1 === "heroe") {
						heroe.innerHTML = Number(heroe.innerHTML) - 1
					}
					if (card.special) {
						special.innerHTML = Number(special.innerHTML.substr(0, separator)) - 1 + " / 10"
					}
					powerUnite.innerHTML = Number(powerUnite.innerHTML) - card.power
					cardUnite.innerHTML = Number(cardUnite.innerHTML) - 1
				}

				if (special.innerHTML === "10 / 10") {
					special.style.color = "red"
				} else {
					special.style.color = "white"
				}
			})
		} else {
			// Add new data to localStorage Array
			existing.push(e.target.id);

			// Save back to localStorage
			localStorage.setItem(parentClass, existing.toString());

			// Add select card to deck list
			deck.append(e.target)

			// Add 1 to infocard unit when a card is choose
			props.data.map((card) => {
				if (e.target.id === card.id.toString()) {
					if (!card.special && card.effect1 !== "heroe" && card.effect1 !== "king") {
						unite.innerHTML = Number(unite.innerHTML) + 1;
					}
					if (card.effect1 === "heroe") {
						heroe.innerHTML = Number(heroe.innerHTML) + 1
					}
					if (card.special) {
						special.innerHTML = Number(special.innerHTML.substr(0, separator)) + 1 + " / 10"
					}
					powerUnite.innerHTML = Number(powerUnite.innerHTML) + card.power
					cardUnite.innerHTML = Number(cardUnite.innerHTML) + 1
				}

				if (special.innerHTML === "10 / 10") {
					special.style.color = "red"
				} else {
					special.style.color = "white"
				}
			})
			data.Neutre.map((card) => {
				if (e.target.id === card.id.toString()) {
					if (!card.special && card.effect1 !== "heroe" && card.effect1 !== "king") {
						unite.innerHTML = Number(unite.innerHTML) + 1;
					}
					if (card.effect1 === "heroe") {
						heroe.innerHTML = Number(heroe.innerHTML) + 1
					}
					if (card.special) {
						special.innerHTML = Number(special.innerHTML.substr(0, separator)) + 1 + " / 10"
					}
					powerUnite.innerHTML = Number(powerUnite.innerHTML) + card.power
					cardUnite.innerHTML = Number(cardUnite.innerHTML) + 1
				}

				if (special.innerHTML === "10 / 10") {
					special.style.color = "red"
				} else {
					special.style.color = "white"
				}
			})
		}
	}

	//////// Register card in localhost ////////

	// const cardClick = (e) => {
	// 	// Get name of faction
	// 	let parentClass = e.target.parentNode.className.split(' ')[0];

	// 	// Get deck list
	// 	let deck = document.querySelector(`.mainDeck .${parentClass}.faction`)
	// 	//Get card list
	// 	let card = document.querySelector(`.deck .${parentClass}.faction`)

	// 	// Get the existing data
	// 	var existing = localStorage.getItem(parentClass);

	// 	// If no existing data, create an array
	// 	// Otherwise, convert the localStorage string to an array
	// 	existing = existing ? existing.split(',') : [];

	// 	var unite = document.querySelector('.unites')
	// 	var powerUnite = document.querySelector('.power')
	// 	var heroe = document.querySelector('.count')
	// 	var cardUnite = document.querySelector('.existing')
	// 	var special = document.querySelector('.speciales')

	// 	if (e.target.parentNode.parentNode.className === "mainDeck") {
	// 		card.append(e.target)

	// 		const index = existing.indexOf(e.target.id);
	// 		if (index > -1) {
	// 			existing.splice(index, 1);
	// 		}

	// 		// Save back to localStorage
	// 		localStorage.setItem(parentClass, existing.toString());

	// 		// Add 1 to infocard unit when a card is choose
	// 		props.data.map((card) => {
	// 			if (e.target.id === card.id.toString()) {
	// 				if (!card.special && card.effect1 !== "heroe" && card.effect1 !== "king") {
	// 					unite.innerHTML = Number(unite.innerHTML) - 1;
	// 				}
	// 				if (card.effect1 === "heroe") {
	// 					heroe.innerHTML = Number(heroe.innerHTML) - 1
	// 				}
	// 				if (card.special) {
	// 					special.innerHTML = Number(special.innerHTML) - 1
	// 				}
	// 				powerUnite.innerHTML = Number(powerUnite.innerHTML) - card.power
	// 				cardUnite.innerHTML = Number(cardUnite.innerHTML) - 1
	// 			}
	// 		})
	// 	} else {
	// 		// Add new data to localStorage Array
	// 		existing.push(e.target.id);

	// 		// Save back to localStorage
	// 		localStorage.setItem(parentClass, existing.toString());

	// 		// Add select card to deck list
	// 		deck.append(e.target)

	// 		// Add 1 to infocard unit when a card is choose
	// 		props.data.map((card) => {
	// 			if (e.target.id === card.id.toString()) {
	// 				if (!card.special && card.effect1 !== "heroe" && card.effect1 !== "king") {
	// 					unite.innerHTML = Number(unite.innerHTML) + 1;
	// 				}
	// 				if (card.effect1 === "heroe") {
	// 					heroe.innerHTML = Number(heroe.innerHTML) + 1
	// 				}
	// 				if (card.special) {
	// 					special.innerHTML = Number(special.innerHTML) + 1
	// 				}
	// 				powerUnite.innerHTML = Number(powerUnite.innerHTML) + card.power
	// 				cardUnite.innerHTML = Number(cardUnite.innerHTML) + 1
	// 			}
	// 		})
	// 	}
	// }

	return(
		<div className={props.faction + " faction"}>
			{data.Neutre.map((card, index) =>
				existing.includes(card.id.toString()) ? null : <img key={index} id={card.id} onDoubleClick={cardClick} onContextMenu={infoCardNeutre} src={card.image_url} alt="carte" />
			)}
			{props.data.map((card, index) =>
				existing.includes(card.id.toString()) ? null : <img key={index} id={card.id} onDoubleClick={cardClick} onContextMenu={infoCard} src={card.image_url} alt="carte" />
			)}
			{open === true &&
				props.data.map((card, index) => {
					if (card.id.toString() === idc) {
						return( 
							<div key={index} onClick={() => setOpen(!open)} className="infoCard">
								<img src={card.image_url} alt="carte" />
								<div href="#" className="close" />
								{ card.description1 &&
									<div className="infoCardText">
										{card.nameEffect && <p>{card.nameEffect}</p>}
										{card.description1 && <p>{card.description1}</p>}
										{card.description2 && <p>{card.description2}</p>}
									</div>
								}
							</div>
						)
					}
					return false
				})
			}
			{openNeutre === true &&
				data.Neutre.map((card, index) => {
					if (card.id.toString() === idcNeutre) {
						return( 
							<div key={index} onClick={() => setOpenNeutre(!openNeutre)} className="infoCard">
								<img src={card.image_url} alt="carte" />
								<div href="#" className="close" />
								{ card.description1 &&
									<div className="infoCardText">
										{card.nameEffect && <p>{card.nameEffect}</p>}
										{card.description1 && <p>{card.description1}</p>}
										{card.description2 && <p>{card.description2}</p>}
									</div>
								}
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