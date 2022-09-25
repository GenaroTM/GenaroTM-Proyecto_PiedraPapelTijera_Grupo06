import React, {useState, useEffect} from 'react'
import Guide from './Guide'
import Duel from './Duel'
import Options from './Options'
import botInt from './botInt'
import gameLogic from './gameLogic'
import newMatch from './newMatch'

const BoxGame = () => {

  const [gameState, setGameState] = useState({
    playerOption: null,
    botOption: null,
    guide: 'Choose an option'
  })

  useEffect(() => {
    botInt(gameState, setGameState)
  }, [gameState.playerOption])

  useEffect(() => {
    if(isNaN(gameState.botOption)){
      gameLogic(gameState, setGameState)
      newMatch(gameState, setGameState)
    }
  }, [gameState.botOption])

  return <div className='box-game'>
    <Guide guide={gameState.guide} />
    <Duel 
    playerOption={gameState.playerOption} 
    botOption={gameState.botOption} 
    />
    <Options gameState={gameState} setGameState={setGameState} />
  </div>
}

export default BoxGame