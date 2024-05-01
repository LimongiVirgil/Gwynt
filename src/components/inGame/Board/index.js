import React from 'react'
import './styles.scss'

const Board = ({placeCard, concatData}) => {

  console.log(placeCard)

  const addCard = () => {

    if (!placeCard) {
      return false
    }

    return <img id={placeCard.cardID} src={placeCard.url} alt={placeCard.name} />
  }

  return (
    <div className="boardGame">
      <div className="EnemyMelee"></div>
      <div className="EnemyArchery"></div>
      <div className="EnemySiege"></div>
      <div className="siege">{addCard()}</div>
      <div className="archery"></div>
      <div className="melee"></div>
    </div>
  )
}

export default Board