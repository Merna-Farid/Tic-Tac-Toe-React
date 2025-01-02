export default function GameBoard({winner,onReset}){
    return(
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner &&<p>{winner} win</p>}
            {!winner && <p>It's a draw</p>}

            <button onClick={onReset}>reset</button>
        </div>
    )
}