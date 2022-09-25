const newMatch = (gameState, setGameState) => {
    setTimeout(() => {
      setGameState({...gameState, guide: 'New Match in 5'})
  
      setTimeout(() => {
        setGameState({...gameState, guide: 'New Match in 4'})
      }, 1000)
      setTimeout(() => {
        setGameState({...gameState, guide: 'New Match in 3'})
      }, 2000)
      setTimeout(() => {
        setGameState({...gameState, guide: 'New Match in 2'})
      }, 3000)
      setTimeout(() => {
        setGameState({...gameState, guide: 'New Match in 1'})
      }, 4000)
    
      setTimeout(() => {
        setGameState({...gameState, guide: 'Choose an option', playerOption: null, botOption: null})
      }, 5000)
    }, 3000)
    
  }
  
  export default newMatch