import React from "react";
import game from '../Assets/game.mp3'
import { useState } from "react";
import Box from "./Box";
const Board = () => {
    const [state,setState] = useState(Array(9).fill(null));
    const [Oplayer,setOPlayer] = useState(true);
    const song= new Audio(game);
    
    const CheckingWinner = () =>{
      const winninCriteria = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];

        for(let element of winninCriteria){
            const [i, j, k] = element;
            if(state[i]!==null && state[i]===state[j] && state[i]===state[k]){
                return state[i];
            }   
        }

        let count = 0;
        state.forEach((e)=>{
          if(e!==null){
            count++
          }
        })
        if(count ===9){
          alert("No one Wins. Let's play again!")
          return setState(Array(9).fill(null));
        }

        return false
    }

    const isWinner = CheckingWinner()
    const handleClick =(index)=>{
        if(state[index]!==null){
            return; 
        }
        const duplicateState = [...state];
        duplicateState[index] = Oplayer ? "O" : "X";
        setState(duplicateState)
        setOPlayer((p)=>!p)
    }
    const handleReset = () =>{
        setState(Array(9).fill(null))
    }
    const HandleMusic = ()=>{
            song.play()
    }
    const HandleMusic2 = ()=>{
            song.pause()
    }
  
  return (
    <>
    <div className="board_container">
        <h1 style={{textAlign:'center'}}>Tic Tac Toe</h1>
        <audio autoPlay loop >
            <source src={game}/>
        </audio>
        <button onClick={HandleMusic}>Play</button>
        <button onClick={HandleMusic2}>Mute</button>
    {isWinner ? <>
    {isWinner} Won the Game
    <button  onClick={handleReset}>Lets! Play Again</button>
    </> :<>
    <h4>{Oplayer ? "O" : "X"}'s Turn</h4>
      <div className="board-row">
        <Box cn={Oplayer} value={state[0]} onclick={()=>handleClick(0)}/>
        <Box cn={Oplayer} value={state[1]} onclick={()=>handleClick(1)}/>
        <Box cn={Oplayer} value={state[2]} onclick={()=>handleClick(2)}/>
      </div>
      <div className="board-row">
        <Box value={state[3]} onclick={()=>handleClick(3)}/>
        <Box value={state[4]} onclick={()=>handleClick(4)}/>
        <Box value={state[5]} onclick={()=>handleClick(5)}/>
      </div>
      <div className="board-row">
        <Box value={state[6]} onclick={()=>handleClick(6)}/>
        <Box value={state[7]} onclick={()=>handleClick(7)}/>
        <Box value={state[8]} onclick={()=>handleClick(8)}/>
      </div>
      </>
    }
    </div>
    </>
  );
};

export default Board;
