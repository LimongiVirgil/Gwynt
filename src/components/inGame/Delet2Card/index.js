import React, {useEffect, useState} from 'react';
import './styles.scss'

//Import slick slider
import Slider from "react-slick";

export default function HandDeck({ concatData, sliced }) {

  const [cardList, setCardList] = useState()
  const [number, setNumber] = useState(0)

  const settings = {
    className: "sliderContainer",
    draggable: false,
		infinite: false,
		slidesToShow: 3,
    centerMode: true,
    centerPadding: '180px',
    arrows: true,
  };

  useEffect(() => {
    setCardList(sliced)
    console.log(number)
  }, [cardList, number])

  const deletCard = (e) => {
    //get deck game to remove first element and add it to handDeck
    var deck = localStorage.getItem("deck").split(',')
    var getfirstElement = deck.slice(0, 1)
    deck.shift()
    localStorage.setItem("deck", deck)

    var selectedCard = e.target.id
    
    var newHandDeck = cardList;

    var index = newHandDeck.indexOf(selectedCard);
    if (index !== -1) {
      setNumber(number + 1)
      newHandDeck[index] = getfirstElement.toString()
      setCardList(newHandDeck)
    }

    console.log(cardList)
  }

  return (
    <div className="infoCard deckRemove">
      <p className="title">Selectionner 2 cartes à retirer de votre main</p>
      <Slider {...settings}>
        {cardList && concatData.map((card, index) => {
          if (cardList.includes(card.id.toString())) {
            return (
              <div key={index} className="cardDesc">
                <img src={card.image_url} id={card.id} alt={card.name} onClick={deletCard}/>
                { card.effect1 && 
                  <div className="infoCardText">
                    <p>{card.effect1}</p>
                    <p>{card.description1}</p>
                    <p>{card.description2}</p>
                  </div>
                }
              </div>
            )
          }
        })}
        <div></div>
        <div></div>
      </Slider>
    </div>
  )
}