import React from 'react';
import './styles.scss';

export default function StockCard({faction, stock}) {

  return (
    <>
      <img title={stock} src={`./images/${faction}/backface.jpg`} alt="carte du deck"/>
    </>
  )
}