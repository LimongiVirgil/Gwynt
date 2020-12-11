import React, {useState} from 'react';
import './styles.scss'

//Import slick slider
import Slider from "react-slick";

export default function HandDeck({ concatData, sliced }) {

  const [cardList, setCardList]= useState(sliced)

  const settings = {
		className: "sliderContainer",
		infinite: false,
		slidesToShow: 3,
    centerMode: true,
    centerPadding: '180px',
    arrows: true,
  };

  const deletCard = (e) => {
    var deck = localStorage.getItem("deck").split(',')
    var getfirstElement = deck.slice(0, 1)
    deck.shift()

    var selectedCard = e.target.id
    //var currentList = cardList

    /* var index = currentList.indexOf(selectedCard);
    if (index !== -1) {
      currentList[index] = getfirstElement.toString();
    } */

    //setCardList(currentList)

    console.log(cardList)

    var index = cardList.indexOf(selectedCard);
    if (index !== -1) {
      setCardList(cardList[index] = getfirstElement.toString()) 
    }

    console.log(cardList)
  }

  return (
    <div className="infoCard deckRemove">
      <p className="title">Selectionner 2 cartes à retirer de votre main</p>
      <Slider {...settings}>
        {concatData.map((card, index) => {
          if (cardList.includes(card.id.toString())) {
            return (<div key={index} className="cardDesc">
              <img src={card.image_url} id={card.id} alt={card.name} onClick={deletCard}/>
              { card.effect1 && 
                <div className="infoCardText">
                  <p>{card.effect1}</p>
                  <p>{card.description1}</p>
                  <p>{card.description2}</p>
                </div>
              }
            </div>)
          }
        })}
        <div></div>
        <div></div>
      </Slider>
    </div>
  )
}