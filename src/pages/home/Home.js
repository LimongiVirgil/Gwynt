import React from 'react';
import { Link, useHistory } from 'react-router-dom';

// Scss
import './home.scss'

// Components
import { fullScreen } from '../../tools/fullScreen'
import Warning from '../../components/Warning/Warning'

export default function Home() {
  const history = useHistory();

  const handleClick = () => {
    fullScreen();
    history.push("class");
  }
  
  return (
    <div className="menu">
      <Warning />
      <div className="gameTitle">
        <img src="/images/logo_witcher.png" alt="title logo" />
        <img src="/images/Gwent.png" alt="background" />
      </div>
      <button onClick={handleClick}>
        <div className="hover-ripple playButton">
          <p>Jouer</p>
        </div>
      </button>
    </div>
  );
};
