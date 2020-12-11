import React, {useState} from 'react';
import './styles.scss';
import data from '../../../cards.json'

export default function KingCard({faction, idKing, enemy}) {

  const [open, setOpen] = useState(false);

  const infoCard = (e) => {
		setOpen(!open)
		e.preventDefault()
  }

  var kingName;
  var kingUrl;
  var kingDesc;
  var kingNameEffect;

  data[faction].map(card => {
    if (card.id.toString() === idKing) {
      kingName = card.name
      kingUrl = card.image_url
      kingDesc = card.description1
      kingNameEffect = card.nameEffect
    }
  })

  return (
    <>
      <img className={["chiefCard", enemy].join(' ')} src={kingUrl} alt={kingName} onContextMenu={infoCard}/>
      { open && 
        <div className="infoCard">
          <img src={kingUrl} alt="carte"/>
          <div href="#" className="close" onClick={() => setOpen(!open)}/>
          <div className="infoCardText">
            <p>{kingNameEffect}</p>
            <p>{kingDesc}</p>
          </div>
        </div>
      }
    </>
  )
}