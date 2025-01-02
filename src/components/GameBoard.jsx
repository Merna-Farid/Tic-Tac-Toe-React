
export default function GameBoard({check,board}){
    

    
function design(symbol){
    let name=null
    if(symbol=='X'){
        name='X'
    }
    else if(symbol=='O'){
        name='O'
    }
    return name
}

    return (
        <ol id="board">
                {board.map((row,i)=>{
                    return(
                        <li key={i} >
                       <ol id="row">
                    {row.map((col,index)=>{
                        return(
                            <li id="col" key={index}>
                                {}
                                <button  className={design(board[i][index])}onClick={()=>{check(i,index)}} disabled={col!=null}>{board[i][index]}</button>
                                </li>
                        )
                        })}
                        </ol>
                        </li>)
                    })}
        </ol>
        )}