import React, { useRef } from 'react';

import './Warning.scss'

const Warning = () => {

  const warningContainer = useRef(null);

  const handleClick = () => {
    warningContainer.current.style.display = "none";
  } 

  return (
    <div data-testid="warning-wrapper" ref={warningContainer} className="warningContainer">
      <div className="warningMessage">
        <div data-testid="close-icon" className="close" onClick={() => handleClick()}/>
        <p>Ce site a été réalisé à des fins ludiques et professionnelles pour l'auteur uniquement. Les contenus présentés n'ont pas fait l'objet d'une demande de droit d'utilisation. Ce site ne sera, en aucun cas, exploité à des fins commerciales.</p>
      </div>
    </div>
  )
}

export default Warning