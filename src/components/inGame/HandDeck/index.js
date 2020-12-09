import React, {useState} from 'react';
import './styles.scss'
import data from '../../../cards.json'

export default function HandDeck({shuffledCards, concatData, faction}) {

  const [open, setOpen] = useState(false);

  const [cardName, setCardName] = useState(false);
  const [cardUrl, setCardUrl] = useState(false);
  const [cardDesc, setCardDesc] = useState(false);
  const [cardNameEffect, setCardNameEffect] = useState(false);

  var sliced = shuffledCards.slice(0, 10)

  var factionName; 

  const infoCard = (e) => {
    setOpen(!open)

    if (e.target.id >= 1 && e.target.id <= 32) {
      factionName = "Neutre"
    } else if (e.target.id >= 33 && e.target.id <= 75) {
      factionName = "Skellige"
    } else if (e.target.id >= 76 && e.target.id <= 119) {
      factionName = "Monstres"
    } else if (e.target.id >= 120 && e.target.id <= 160) {
      factionName = "ScoiaTael"
    } else if (e.target.id >= 161 && e.target.id <= 201) {
      factionName = "Nilfgaard"
    } else {
      factionName = "Nordling"
    }
    
    data[factionName].map(card => {
      if (card.id.toString() === e.target.id) {
        setCardName(card.name)
        setCardUrl(card.image_url)
        setCardDesc(card.description1)
        setCardNameEffect(card.nameEffect)
      }
    })

    console.log(cardName, cardUrl, cardDesc, cardNameEffect)

		e.preventDefault()
  }


  return (
    <>
    <div className="handDeck">
      {
        concatData.map((card, index) => {
          if (sliced.includes(card.id.toString())) {
            return <img key={index} id={card.id} src={card.image_url} onContextMenu={infoCard} alt="carte" />
          }
        })
      }
    </div>
    { open && 
      <div className="infoCard">
        <img src={cardUrl} alt="carte"/>
        <div href="#" className="close" onClick={() => setOpen(!open)}/>
        { cardNameEffect &&
          <div className="infoCardText">
            <p>{cardNameEffect}</p>
            <p>{cardDesc}</p>
          </div>
        }
      </div>
    }
  </>
  )
}