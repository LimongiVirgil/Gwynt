import React, {useEffect, useCallback, useRef} from 'react';
import data from '../cards.json'
import CardList from '../components/CardList/CardList'
import DeckList from '../components/DeckList/DeckList'
import InfoFaction from '../components/InfoFaction/InfoFaction'

export default Class => {

  const popup = useRef(null)
  
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
        popup.current.style.display = "block"
      }
  }

  const enterFunction = useCallback((e) => {
    if(e.keyCode === 13) {
      var choosenFaction = document.querySelectorAll(`.li[active='active']`)

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
    var factionsName = document.querySelectorAll('.li')
    var factions = document.querySelectorAll('.faction')
    var thisFaction = document.querySelectorAll(`.${e.target.classList[0]}.faction`)

    factions.forEach(faction => {
      faction.style.display = 'none'
    })

    thisFaction.forEach(th => {
      th.style.display = "block"
    })

    factionsName.forEach(factions => {
      factions.setAttribute('active', 'disabled');
    })

    e.target.setAttribute('active', 'active');
  }

  return (
    <div className="classe">
      <ul className="factionName">
        <li className="Nordling li" active="active" onClick={handleClickClass}>Royaume du Nord</li>
        <li className="Nilfgaard li" active="disabled" onClick={handleClickClass}>Empire de Nilfgaard</li>
        <li className="ScoiaTael li" active="disabled" onClick={handleClickClass}>Scoia'Tael</li>
        <li className="Monstres li" active="disabled" onClick={handleClickClass}>Monstres</li>
        <li className="Skellige li" active="disabled" onClick={handleClickClass}>Skellige</li>
      </ul>
      <div className="mainContainer">
        <div className="deck">
          <h2>Collection de cartes</h2>
          <CardList data={data.Nordling}  faction="Nordling"/>
          <CardList data={data.Nilfgaard} faction="Nilfgaard"/>
          <CardList data={data.Monstres} faction="Monstres"/>
          <CardList data={data.ScoiaTael} faction="ScoiaTael"/>
          <CardList data={data.Skellige} faction="Skellige"/>
        </div>
        <div className="infoDeck">
          <InfoFaction data={data.Nordling} faction="Nordling"/>
          <InfoFaction data={data.Nilfgaard} faction="Nilfgaard"/>
          <InfoFaction data={data.Monstres} faction="Monstres"/>
          <InfoFaction data={data.ScoiaTael} faction="ScoiaTael"/>
          <InfoFaction data={data.Skellige} faction="Skellige"/>
        </div>
        <div className="mainDeck">
          <h2>Cartes du jeu</h2>
          <DeckList data={data.Nordling} faction="Nordling"/>
          <DeckList data={data.Nilfgaard} faction="Nilfgaard"/>
          <DeckList data={data.Monstres} faction="Monstres"/>
          <DeckList data={data.ScoiaTael} faction="ScoiaTael"/>
          <DeckList data={data.Skellige} faction="Skellige"/>
        </div>
      </div>
      <div className="command">
        <img src="./images/mouseRight.svg" alt="mouse right click" />
        <p>Infos Cartes</p>
        <div>Enter</div>
        <p>Pour commencer</p>
      </div>
      <div ref={popup} className="warning" onClick={() => popup.current.style.display = "none"}>
        <div href="#" className="close" />
        <div className="border">
          <p>Votre deck doit contenir entre 25 et 40 cartes</p>
        </div>
      </div>
    </div>
  );
}
