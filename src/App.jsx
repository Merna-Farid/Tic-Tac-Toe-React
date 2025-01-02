import { useState } from 'react'
import './App.css'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Logs'
import { WINNING_COMBINATIONS } from './winningCombination'
import  GameOver from './components/GameOver'


const initialGameBoard=[
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

function App() {
  const [gameTurns,setGameTurns]=useState([])
  const [symbol,setSymbol]=useState('X')
  const [players,setPlayers]=useState({'X':'player1','O':'player2'})
  let gameBoard=[...initialGameBoard.map((row)=>[...row])]
  
const handlePlayerChange=(symbol,player)=>{
  setPlayers((prev)=>{
    return {...prev,
      [symbol]:player
    }

  })
}

  for(let turn of gameTurns){
   
        console.log(turn)
        const{square,player}=turn
        const {row,col}=square
        gameBoard[row][col]=player
    
}
const handleReset=()=>{
  setGameTurns([])
}
  const handleCheck=(rowIndex,colIndex)=>{
    setSymbol((prev)=>{
      return prev==='X'?'O':'X'})
    setGameTurns((prev)=>{
      let currentPlayer='X'
      if(prev.length>0&&prev[0].player==='X'){
        currentPlayer='O'
      }
      else{currentPlayer='X'}
      const updated= [
        {square:{row:rowIndex,col:colIndex},player:currentPlayer}
        ,...prev]
        return updated
    })
  }
  let winner=''
  let hasDraw=gameTurns.length===9 && !winner
  for(const combination of WINNING_COMBINATIONS){
    const first=gameBoard[combination[0].row][combination[0].column]
    const second=gameBoard[combination[1].row][combination[1].column]
    const third=gameBoard[combination[2].row][combination[2].column]
    if(first!==null&&first===second&&second===third){
      winner=players[first]
      break
      
  }
  }
  

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players">
            <Player name={players.X} symbol="X" isActive={symbol=='X'} onNameChange={handlePlayerChange}/>
            <Player name={players.O} symbol="O" isActive={symbol=='O'} onNameChange={handlePlayerChange}/>
          </ol>
          
          <div id="game-board">
          {(winner ||hasDraw)&&<GameOver winner={winner} onReset={handleReset}/>}
          <GameBoard check={handleCheck} board={gameBoard}/>
          </div>
        </div>
        <Log turns={gameTurns}/>
      </main>
    </>
  )
}

export default App
