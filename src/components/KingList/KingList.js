import React, {useState} from 'react';
import Slider from "react-slick";
import data from '../../cards.json'
import './KingList.scss'

function KingList(props) {
	const [open, setOpen] = useState(false);

	// Get faction
	let factionName = props.faction

	// Get the existing data
	var existing = localStorage.getItem(factionName);

	// If no existing data, create an array
	// Otherwise, convert the localStorage string to an array
	existing = existing ? existing.split(',') : [];

	const handleCardClick = (e) => {
		if (factionName === "Nordling") {
			const nordlingChief = ["202", "203", "204", "205"];
			{nordlingChief.map((id) =>
				existing.includes(id) ? existing.splice( existing.indexOf(id), 1, e.target.id.toString() ) : null
			)}
			localStorage.setItem(factionName, existing.toString());
		} else if (factionName === "Nilfgaard") {
			const nilfgaardChief = ["161", "162", "163", "164"];
			{nilfgaardChief.map((id) =>
				existing.includes(id) ? existing.splice( existing.indexOf(id), 1, e.target.id.toString() ) : null
			)}
			localStorage.setItem(factionName, existing.toString());
		} else if (factionName === "Monstres") {
			const monstresChief = ["76", "77", "78", "79"];
			{monstresChief.map((id) =>
				existing.includes(id) ? existing.splice( existing.indexOf(id), 1, e.target.id.toString() ) : null
			)}
			localStorage.setItem(factionName, existing.toString());
		} else if (factionName === "ScoiaTael") {
			const scoiaTaelChief = ["120", "121", "122", "123"];
			{scoiaTaelChief.map((id) =>
				existing.includes(id) ? existing.splice( existing.indexOf(id), 1, e.target.id.toString() ) : null
			)}
			localStorage.setItem(factionName, existing.toString());
		} else if (factionName === "Skellige") {
			const skelligeChief = ["33", "34"];
			{skelligeChief.map((id) =>
				existing.includes(id) ? existing.splice( existing.indexOf(id), 1, e.target.id.toString() ) : null
			)}
			localStorage.setItem(factionName, existing.toString());
		}

		setOpen(false)
	}

	const settings = {
		className: "sliderContainer",
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		arrows: false,
	};

	return(
		<div className={props.faction + ' faction'}>
			<p>Chef</p>
			<div className="chiefImg">
				{props.data.map((card, index) =>
					(card.effect1 === 'king' && existing.includes(card.id.toString())) ? <img key={index} id={card.id} onClick={() => setOpen(true)} src={card.image_url} alt="carte" /> : null
				)}
			</div>
			{open &&
				<div className="chiefGallery">
					<div href="#" className="close" onClick={() => setOpen(false)}/>
					<Slider {...settings}>
						{props.data.map((card, index) => {
							if (card.effect1 === "king") {
								return( 
									<div className="chiefImgs" key={index}>
										<img src={card.image_url} alt="carte" id={card.id} onDoubleClick={handleCardClick}/>
										<div className="infoCardText">
											{card.nameEffect && <p>{card.nameEffect}</p>}
											{card.description1 && <p>{card.description1}</p>}
											{card.description2 && <p>{card.description2}</p>}
										</div>
									</div>
								)
							}
						})}
					</Slider>
				</div>}
		</div>
	)
}

export default KingList