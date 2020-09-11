import React, {useState} from 'react';
import './CardList.scss'
import data from '../../cards.json'

function CardList(props) {
	const [open, setOpen] = useState(false);
	const [idc, setIdc] = useState(null);
	//const [chiefCard, setChiefCard] = useState(false);

	const [openNeutre, setOpenNeutre] = useState(false);
	const [idcNeutre, setIdcNeutre] = useState(null);

	// Get faction
	let factionName = props.faction

	// Get the existing data
	var existing = localStorage.getItem(factionName);

	// If no existing data, create an array
	// Otherwise, convert the localStorage string to an array
	existing = existing ? existing.split(',') : [];

	var chiefCard = true;

	if (factionName === "Nordling") {
		const nordlingChief = ["202", "203", "204", "205"];
		{nordlingChief.map((id) => {
			if (!existing.includes("202") && !existing.includes("203") && !existing.includes("204") && !existing.includes("205")) {
				return (
					existing.push("202")
				)
			}
		})}
		localStorage.setItem(factionName, existing.toString());
	} else if (factionName === "Nilfgaard") {
		const nilfgaardChief = ["161", "162", "163", "164"];
		{nilfgaardChief.map((id) => {
			if (!existing.includes("161") && !existing.includes("162") && !existing.includes("163") && !existing.includes("164")) {
				return (
					existing.push("161")
				)
			}
		})}
		localStorage.setItem(factionName, existing.toString());
	} else if (factionName === "Monstres") {
		const monstresChief = ["76", "77", "78", "79"];
		{monstresChief.map((id) => {
			if (!existing.includes("76") && !existing.includes("77") && !existing.includes("78") && !existing.includes("79")) {
				return (
					existing.push("76")
				)
			}
		})}
		localStorage.setItem(factionName, existing.toString());
	} else if (factionName === "ScoiaTael") {
		const scoiaTaelChief = ["120", "121", "122", "123"];
		{scoiaTaelChief.map((id) => {
			if (!existing.includes("120") && !existing.includes("121") && !existing.includes("122") && !existing.includes("123")) {
				return (
					existing.push("120")
				)
			}
		})}
		localStorage.setItem(factionName, existing.toString());
	} else if (factionName === "Skellige") {
		const skelligeChief = ["33", "34"];
		{skelligeChief.map((id) => {
			if (!existing.includes("33") && !existing.includes("34")) {
				return (
					existing.push("33")
				)
			}
		})}
		localStorage.setItem(factionName, existing.toString());
	}

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

		var addCard = true

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
				if (cardUnite.innerHTML === '40') {
					cardUnite.style.color = 'red'
				} else {
					cardUnite.style.color = "white"
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
				if (cardUnite.innerHTML === '40') {
					cardUnite.style.color = 'red'
				} else {
					cardUnite.style.color = "white"
				}
			})
		} else {
			if (special.innerHTML === "10 / 10") {
				data.Neutre.map((card) => {
					if (e.target.id === card.id.toString() && (card.effect1 === "meteo" || card.effect1 ===  "chargeRing" || card.effect1 ===  "destroy" || card.effect1 ===  "lure")) {
						addCard = false;
					}
				})
			}

			if (addCard) {

				if (existing.length < 40) {
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
						if (cardUnite.innerHTML === '40') {
							cardUnite.style.color = 'red'
						} else {
							cardUnite.style.color = "white"
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
						if (cardUnite.innerHTML === '40') {
							cardUnite.style.color = 'red'
						} else {
							cardUnite.style.color = "white"
						}
					})
				}
			}

			addCard = true;
		}
	}

	return(
		<div active={props.active} className={props.faction + " faction"}>
			{data.Neutre.map((card, index) =>
				existing.includes(card.id.toString()) ? null : <img key={index} id={card.id} onDoubleClick={cardClick} onContextMenu={infoCardNeutre} src={card.image_url} alt="carte" />
			)}
			{props.data.map((card, index) =>
				(existing.includes(card.id.toString()) || card.effect1 === "king") ? null : <img key={index} id={card.id} onDoubleClick={cardClick} onContextMenu={infoCard} src={card.image_url} alt="carte" />
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