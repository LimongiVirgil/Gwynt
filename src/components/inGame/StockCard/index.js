import React from 'react';
import './styles.scss';

export default function StockCard({faction}) {

  return (
    <>
      <img src={`./images/${faction}/backface.jpg`} alt="carte du deck"/>
    </>
  )
}