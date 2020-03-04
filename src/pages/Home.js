import React from 'react';
import { Link } from 'react-router-dom';
//import './App.scss';

function Home() {
  return (
    <div className="menu">
      <div className="gameTitle">
        <img src="/images/logo_witcher.png" alt="title logo"></img>
        <img src="/images/Gwent.png" alt="background"></img>
      </div>
      <Link to="/class">
        <button className="hover-ripple">Jouer</button>
      </Link>
    </div>
  );
}

export default Home;
