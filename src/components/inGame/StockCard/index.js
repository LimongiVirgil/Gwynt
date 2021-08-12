import React from 'react';
import './styles.scss';

export default function StockCard({faction, stock, enemy}) {
  return (
    <div className={["deckBoard", enemy].join(' ')}>
      <img src={`./images/${faction}/backface.jpg`} alt="carte du deck"/>
      <div className={["nbCard", faction].join(' ')}>
        <p>{stock}</p>
      </div>
    </div>
  )
}
