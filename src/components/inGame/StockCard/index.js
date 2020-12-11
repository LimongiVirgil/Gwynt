import React, {useState, useEffect} from 'react';
import './styles.scss';

export default function StockCard({faction, stock, enemy}) {
  return (
    <div className={["deck", enemy].join(' ')}>
      <img title={`${stock} cartes restante`} src={`./images/${faction}/backface.jpg`} alt="carte du deck"/>
    </div>
  )
}