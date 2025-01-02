import { useState } from "react"
export default function Player({name,symbol,isActive,onNameChange}){
    const [isEditing,setIsEditing]=useState(false)
    const [playerName,setPlayerName]=useState(name)
    const handleClick=()=>{
        setIsEditing((editing=>!editing))
        if(!isEditing){
            onNameChange(symbol,playerName)
        }
    }
    const handleChange=(event)=>{
        setPlayerName(event.target.value)
    }
    
    return (
        <li >
             <span className="player">
             {isEditing ? (
                <span id="player-name" className={isActive ?'highlight': undefined}>{playerName}</span>): 
            ( <input type="text" className={isActive ?'highlight': undefined} value={playerName}  required onChange={(event)=>handleChange(event)} />
)}
            <span id="player-symbol">{symbol}</span>
            <button onClick={handleClick}>{isEditing ?"Edit":"Save"}</button>
            </span>
            
        </li>
    )
 }
