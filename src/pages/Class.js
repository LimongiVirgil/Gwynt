import React, {useState, useEffect} from 'react';
import data from '../cards.json'

export default Class => {
  let mainDeck = document.querySelector('.mainDeck')

  const handleClickClass = e => {
    var factions = document.querySelectorAll('.faction')
    var thisFaction = document.querySelector(`.${e.target.classList.value}.faction`)

    factions.forEach(faction => (
      faction.style.display = 'none'
    ))

    thisFaction.style.display = "block"
  }

  function CardList(props) {
    return(
      <div className={props.faction + " faction"}>
        {props.data.map(card => 
          <img onClick={cardClick} src={card.image_url} alt="carte"></img>
        )}
      </div>
    )
  }


  const cardClick = (e) => {
    // Get the existing data
    var existing = localStorage.getItem('cardGame');

    // If no existing data, create an array
    // Otherwise, convert the localStorage string to an array
    existing = existing ? existing.split(',') : [];

    if (e.detail == 2) {
      e.target.style.display = 'none'

      // Add new data to localStorage Array
      existing.push(e.target.id);

      // Save back to localStorage
      localStorage.setItem('cardGame', existing.toString());
    }
  }

  return (
    <div className="classe">
      <ul className="factionName">
        <li className="Nordling" onClick={handleClickClass}>Royaume du Nord</li>
        <li className="Nilfgaard" onClick={handleClickClass}>Empire de Nilfgaard</li>
        <li className="ScoiaTael" onClick={handleClickClass}>Scoia'Tael</li>
        <li className="Monstres" onClick={handleClickClass}>Monstres</li>
        <li className="Skellige" onClick={handleClickClass}>Skellige</li>
      </ul>
      <div className="mainContainer">
        <div className="deck">
            <CardList data={data.Nordling} faction="Nordling"/>
            <CardList data={data.Nilfgaard} faction="Nilfgaard"/>
            <CardList data={data.Monstres} faction="Monstres"/>
            <CardList data={data.ScoiaTael} faction="ScoiaTael"/>
            <CardList data={data.Skellige} faction="Skellige"/>
        </div>
        <div className="mainDeck">

        </div>
      </div>
    </div>
  );
}
