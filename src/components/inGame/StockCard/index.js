import React, {useState, useEffect} from 'react';
import './styles.scss';

export default function StockCard({faction, stock}) {
  return (
    <>
      <img title={`${stock} cartes restante`} src={`./images/${faction}/backface.jpg`} alt="carte du deck"/>
    </>
  )
}