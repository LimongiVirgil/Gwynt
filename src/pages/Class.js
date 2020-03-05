import React from 'react';
import data from '../cards.json'
import CardList from '../components/CardList/CardList'
import DeckList from '../components/DeckList/DeckList'

export default Class => {
  //let mainDeck = document.querySelector('.mainDeck')

  const handleClickClass = e => {
    var factions = document.querySelectorAll('.faction')
    var thisFaction = document.querySelectorAll(`.${e.target.classList.value}.faction`)

    factions.forEach(faction =>
      faction.style.display = 'none'
    )

    thisFaction.forEach(th =>
      th.style.display = "block"  
    )
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
        <div className="infoDeck">

        </div>
        <div className="mainDeck">
          <DeckList data={data.Nordling} faction="Nordling"/>
          <DeckList data={data.Nilfgaard} faction="Nilfgaard"/>
          <DeckList data={data.Monstres} faction="Monstres"/>
          <DeckList data={data.ScoiaTael} faction="ScoiaTael"/>
          <DeckList data={data.Skellige} faction="Skellige"/>
        </div>
      </div>
    </div>
  );
}
