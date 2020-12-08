import React, {useEffect} from 'react';
import './styles.scss';
import data from '../../../cards.json'

export default function KingCard({faction, idKing}) {

  var kingName;
  var kingUrl;

  data[faction].map(card => {
    if (card.id.toString() === idKing) {
      kingName = card.name
      kingUrl = card.image_url
    }
  })

  return (
    <>
      <img className="chiefCard" src={kingUrl} alt={kingName}/>
    </>
  )
}