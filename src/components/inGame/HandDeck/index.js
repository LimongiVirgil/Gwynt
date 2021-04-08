import React, {useState} from 'react';
import './styles.scss'

//Import component
import Delete2Card from '../Delet2Card'
import { removeSliced } from '../../../tools/deckTools'

export default function HandDeck({shuffledCards, concatData, faction, enemy}) {

  const [open, setOpen] = useState(false);

  const [open2Card, setOpen2Card] = useState(true);

  const [cardName, setCardName] = useState(false);
  const [cardUrl, setCardUrl] = useState(false);
  const [cardDesc, setCardDesc] = useState(false);
  const [cardNameEffect, setCardNameEffect] = useState(false);
  const [newHandCard, setNewHandCard] = useState()

  var sliced = shuffledCards.slice(0, 10)

  if (enemy) {
    localStorage.setItem('slicedEnemyDeck', sliced);
    removeSliced(shuffledCards, "deckEnemy")
  } else {
    localStorage.setItem('slicedDeck', sliced);
    removeSliced(shuffledCards, "deck")
  }

  var factionName; 

  const infoCard = (e) => {
    setOpen(!open)

    concatData.map(card => {
      if (card.id.toString() === e.target.id) {
        setCardName(card.name)
        setCardUrl(card.image_url)
        setCardDesc(card.description1)
        setCardNameEffect(card.nameEffect)
      }
    })

		e.preventDefault()
  }

  const closeDelet2Card = (num, newHandDeck) => {
    if (num === 1) {
      setOpen2Card(false);
      setNewHandCard(newHandDeck)
    }
  }

  return (
    <>
      {!open2Card && <div className={["handDeck", enemy].join(' ')}>
        {
          concatData.map((card, index) => {
            if (newHandCard.includes(card.id.toString()) && !enemy) {
              return <img key={index} id={card.id} src={card.image_url} onContextMenu={infoCard} alt={card.name} />
            } else if (newHandCard.includes(card.id.toString()) && enemy) {
              return <img key={index} src={`./images/${faction}/backface.jpg`} alt={card.name} />
            }
          })
        }
      </div>}
      {enemy && <div className={["handDeck", enemy].join(' ')}>
        {
          concatData.map((card, index) => {
            if (sliced.includes(card.id.toString()) && !enemy) {
              return <img key={index} id={card.id} src={card.image_url} onContextMenu={infoCard} alt={card.name} />
            } else if (sliced.includes(card.id.toString()) && enemy) {
              return <img key={index} src={`./images/${faction}/backface.jpg`} alt={card.name} />
            }
          })
        }
      </div>}
      {!enemy && open2Card && <Delete2Card concatData={concatData} sliced={sliced} passFunction={closeDelet2Card}/>}
      { open && 
        <div className="infoCard">
          <img src={cardUrl} alt={cardName}/>
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