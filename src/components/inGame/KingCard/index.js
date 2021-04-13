import React, { useState, useRef, useEffect } from 'react';
import './styles.scss';
import data from '../../../data/cards.json'

export default function KingCard({faction, idKing, enemy}) {
  const [open, setOpen] = useState(false);

  const kingName = useRef();
  const kingUrl = useRef();
  const kingDesc = useRef();
  const kingNameEffect = useRef();

  const infoCard = (e) => {
		setOpen(!open)
		e.preventDefault()
  }

  useEffect(() => {
    data[faction].forEach(card => {
      if (card.id.toString() === idKing) {
        kingName.current.attributes.src.value = card.image_url
        kingName.current.attributes.alt.value = card.name
        if (open) {
          kingUrl.current.attributes.src.value = card.image_url
          kingDesc.current.innerText = card.description1
          kingNameEffect.current.innerText = card.nameEffect
        }
      }
    })
  })

  return (
    <>
      <img ref={kingName} className={["chiefCard", enemy].join(' ')} src='' alt='' onContextMenu={infoCard}/>
      { open && 
        <div className="infoCard">
          <img ref={kingUrl} src='' alt="carte"/>
          <div href="#" className="close" onClick={() => setOpen(!open)}/>
          <div className="infoCardText">
            <p ref={kingNameEffect}></p>
            <p ref={kingDesc} />
          </div>
        </div>
      }
    </>
  )
}