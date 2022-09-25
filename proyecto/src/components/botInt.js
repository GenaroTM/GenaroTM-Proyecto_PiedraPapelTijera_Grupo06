const botInt = (gameState, setGameState) => {
    if(gameState.playerOption) {
      const number = Math.random()
      setGameState({...gameState, botOption: 3})
  
      setTimeout(() => {
        setGameState({...gameState, botOption: 2})
      },1000)
  
      setTimeout(() => {
        setGameState({...gameState, botOption: 1})
      },2000)
  
      setTimeout(() => {
  
        if(number < 0.33){
          setGameState({...gameState, botOption: 'Rock'})
        } 
        else if(number < 0.66) {
          setGameState({...gameState, botOption: 'Paper'})
        }
        else {
          setGameState({...gameState, botOption: 'Scissors'})
        }
      }, 3000)
  
    }
  }
  
  export default botInt