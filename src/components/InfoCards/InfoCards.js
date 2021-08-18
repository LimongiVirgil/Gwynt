import React from 'react';

export default function InfoCards({closeInfo, idCard, cards}) {

  return (
    <>
      {cards.map((card, index) => {
        if (card.id.toString() === idCard) {
          return( 
            <div key={index} onClick={closeInfo} className="infoCard">
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
      })}
    </>
  )
}
