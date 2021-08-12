import React from 'react';
import { Link } from 'react-router-dom';

// Scss
import './home.scss'

// Components
import { fullScreen } from '../../tools/fullScreen'

export default function Home() {
  
  return (
    <div className="menu">
      <div className="gameTitle">
        <img src="/images/logo_witcher.png" alt="title logo" />
        <img src="/images/Gwent.png" alt="background" />
      </div>
      <Link to="/class" onClick={fullScreen}>
        <div className="hover-ripple playButton">
          <p>Jouer</p>
        </div>
      </Link>
    </div>
  );
};
