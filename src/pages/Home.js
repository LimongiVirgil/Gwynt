import React from 'react';
import { Link } from 'react-router-dom';

//import './App.scss';

function Home() {

  const fullScreen = () => {
    var fullScreen = document.querySelector('html')
    fullScreen.requestFullscreen()
  }
  
  return (
    <div className="menu">
      <div className="gameTitle">
        <img src="/images/logo_witcher.png" alt="title logo"></img>
        <img src="/images/Gwent.png" alt="background"></img>
      </div>
      <Link to="/class" onClick={fullScreen}>
        <button className="hover-ripple">Jouer</button>
      </Link>
    </div>
  );
}

export default Home;
