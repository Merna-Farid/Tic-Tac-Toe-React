export default function Log({turns}){
    return (
        <div id="log">
             <ul >
                {turns.map((turn, index) => (
                    <li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected {turn.square.col},{turn.square.row}</li>
                ))}
            </ul>   
        </div>
    )
}