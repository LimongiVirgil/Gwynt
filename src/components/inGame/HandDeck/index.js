import React from 'react';
import './styles.scss'
import data from '../../../cards.json'

export default function HandDeck({shuffledCards, concatData}) {

  var sliced = shuffledCards.slice(0, 10)

  return (
    <div className="handDeck">
      {
        concatData.map((card, index) => { 
          if (sliced.includes(card.id.toString())) {
            return <img key={index} id={card.id} src={card.image_url} alt="carte" />
          }
        })
      }
    </div>
  )
}