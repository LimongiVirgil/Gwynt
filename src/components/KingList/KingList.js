import React, { useState, useRef } from 'react';
import Slider from "react-slick";

import { getFactionCards } from '../../tools/localStorageTools'
import './KingList.scss'

function KingList(props) {
  const [open, setOpen] = useState(false);

  const dragIcon = useRef(null);

  // Get faction
  let factionName = props.faction
  var existing = getFactionCards(factionName);

  //Replace king in localStorage by choosen king
  const replaceKingByAnother = (kingsNamesList, e) => {
    kingsNamesList.map((id) =>
      existing.includes(id) ? existing.splice( existing.indexOf(id), 1, e.target.id.toString() ) : null
    )

    localStorage.setItem(factionName, existing.toString());
  }

  const handleCardClick = (e) => {
    replaceKingByAnother(props.kingData, e)
    setOpen(false)
  }

  //Slider settings
  const settings = {
    className: "sliderContainer",
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
  };

  const handleDrag = () => {
    console.log('oui')
    dragIcon.current.style.display = "none"
  }

  return(
    <div className={`${props.faction} faction kingList`}>
      <p className="title" >Chef</p>
      <div className="chiefImg">
        {props.data.map((card, index) =>
          (card.effect1 === 'king' && existing.includes(card.id.toString())) ? <img key={index} id={card.id} onClick={() => setOpen(true)} src={card.image_url} alt="carte" /> : null
        )}
      </div>
      {open &&
        <div className="chiefGallery">
          <div href="#" className="close" onClick={() => setOpen(false)}/>
          <Slider {...settings}>
            {props.data.map((card, index) => (
              card.effect1 === "king" &&
                <div className="chiefImgs" key={index} onMouseDown={() => handleDrag()}>
                  <img src={card.image_url} alt="carte" id={card.id} onDoubleClick={handleCardClick}/>
                  <div className="infoCardText">
                    {card.nameEffect && <p>{card.nameEffect}</p>}
                    {card.description1 && <p>{card.description1}</p>}
                    {card.description2 && <p>{card.description2}</p>}
                  </div>
                </div>
            ))}
          </Slider>
          <div ref={dragIcon} className="dragIcon">
            <div className="iconWrapper">
              <div className="handIcon">
                <div className="hand">
                  <div className="circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>}
    </div>
  )
}

export default KingList
