
import React from 'react'

const Option = ({value, gameState, setGameState}) => {

  const buttonClick = () => {
    setGameState({...gameState, playerOption: value, guide:' Choose an option'})
  }

  return gameState.playerOption && gameState.botOption
  ?<button disabled className='btn-option' onClick={buttonClick}>{value}</button> 
  :<button className='btn-option' onClick={buttonClick}>{value}</button> 
}

export default Option