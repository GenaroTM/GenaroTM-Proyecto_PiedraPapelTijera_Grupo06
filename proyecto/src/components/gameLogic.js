const gameLogic = (gameState, setGameState) => {

    const {playerOption, botOption, guide} = gameState
    const winPlayer = 'The winner is the player'
    const winBot = 'The winner is the Bot'
  
    if(playerOption === 'Piedra' && botOption ==='Tijera') setGameState({...gameState, guide: winPlayer})
    else if(playerOption === 'Papel' && botOption ==='Piedra') setGameState({...gameState, guide: winPlayer})
    else if(playerOption === 'Tijera' && botOption ==='Papel') setGameState({...gameState, guide: winPlayer})
    else if(playerOption === botOption) setGameState({...gameState, guide: 'Draw'})
    else setGameState({...gameState, guide: winBot})
  }
  
  export default gameLogic
  