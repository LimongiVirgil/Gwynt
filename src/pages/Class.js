import React, {useEffect, useCallback, useState} from 'react';
import data from '../cards.json'
import CardList from '../components/CardList/CardList'
import DeckList from '../components/DeckList/DeckList'
import InfoFaction from '../components/InfoFaction/InfoFaction'

export default Class => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    document.addEventListener("keydown", enterFunction, false);

    return () => {
      document.removeEventListener("keydown", enterFunction, false);
    };
  }, []);

  const play = (faction) => {
      // Get the existing data
      var existing = localStorage.getItem(faction);

      // If no existing data, create an array
      // Otherwise, convert the localStorage string to an array
      existing = existing ? existing.split(',') : [];

      if (existing.length >= 25 && existing.length <= 40) {
        localStorage.setItem("faction", faction);
        window.location.pathname = '/game'
      } else {
        setIsOpen(true)
      }
  }

  const enterFunction = useCallback((e) => {
    if(e.keyCode === 13) {
      var choosenFaction = document.querySelectorAll(`.faction[active='active']`)

      if (choosenFaction[0].classList[0] === "Nordling") {
        play(choosenFaction[0].classList[0])
      } else if (choosenFaction[0].classList[0] === "Nilfgaard") {
	      play(choosenFaction[0].classList[0])
      } else if (choosenFaction[0].classList[0] === "ScoiaTael") {
	      play(choosenFaction[0].classList[0])
      } else if (choosenFaction[0].classList[0] === "Monstres") {
	      play(choosenFaction[0].classList[0])
      } else if (choosenFaction[0].classList[0] === "Skellige") {
	      play(choosenFaction[0].classList[0])
      }
    }
  }, []);

  const handleClickClass = e => {
    var factions = document.querySelectorAll('.faction')
    var thisFaction = document.querySelectorAll(`.${e.target.classList.value}.faction`)

    factions.forEach(faction => {
      faction.style.display = 'none'
      faction.setAttribute('active', 'disabled');
    })

    thisFaction.forEach(th => {
      th.style.display = "block"
      th.setAttribute('active', 'active');
    })
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
          <h2>Collection de cartes</h2>
          <CardList data={data.Nordling} active="active" faction="Nordling"/>
          <CardList data={data.Nilfgaard} active="disabled" faction="Nilfgaard"/>
          <CardList data={data.Monstres} active="disabled" faction="Monstres"/>
          <CardList data={data.ScoiaTael} active="disabled" faction="ScoiaTael"/>
          <CardList data={data.Skellige} active="disabled" faction="Skellige"/>
        </div>
        <div className="infoDeck">
          <InfoFaction data={data.Nordling} active="active" faction="Nordling"/>
          <InfoFaction data={data.Nilfgaard} active="disabled" faction="Nilfgaard"/>
          <InfoFaction data={data.Monstres} active="disabled" faction="Monstres"/>
          <InfoFaction data={data.ScoiaTael} active="disabled" faction="ScoiaTael"/>
          <InfoFaction data={data.Skellige} active="disabled" faction="Skellige"/>
        </div>
        <div className="mainDeck">
          <h2>Cartes du jeu</h2>
          <DeckList data={data.Nordling} active="active" faction="Nordling"/>
          <DeckList data={data.Nilfgaard} active="disabled" faction="Nilfgaard"/>
          <DeckList data={data.Monstres} active="disabled" faction="Monstres"/>
          <DeckList data={data.ScoiaTael} active="disabled" faction="ScoiaTael"/>
          <DeckList data={data.Skellige} active="disabled" faction="Skellige"/>
        </div>
      </div>
      <div className="command">
        <div>Enter</div>
        <p>Pour commencer</p>
      </div>
      {isOpen && 
        <div className="warning" onClick={() => setIsOpen(false)}>
          <div href="#" className="close" />
          <div className="border">
            <p>Votre deck doit contenir entre 25 et 40 cartes</p>
          </div>
        </div>
      }
    </div>
  );
}
