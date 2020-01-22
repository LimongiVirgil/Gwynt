import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="menu">
      <div className="gameTitle">
        <img src="/images/logo_witcher.png"></img>
        <img src="/images/Gwent.png"></img>
      </div>
      <a>
        <button className="hover-ripple">Jouer</button>
      </a>
    </div>
  );
}

export default App;
