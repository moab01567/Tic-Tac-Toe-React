import React, {useEffect, useState} from "react";
import FieldLine from "./FiledLine";
import FieldSelected from "./FieldSelected";


interface Props{
    TicTacToeSize:number
}

function calculateTicTacToeGridWithGameLines(ticTacToeSize:number):number{
    return ticTacToeSize * 2 - 1
}
function getTicTacToeGridWithGameLines(gridWithGameLinesSize:number):string{
    return "1fr ".repeat(gridWithGameLinesSize);
}

export default function TicTacToeGrid({TicTacToeSize}:Props){
    const [gridWithGameLinesSize, setGridWithGameLinesSize] = useState<number>(calculateTicTacToeGridWithGameLines(TicTacToeSize))

    const gridStyle = {
        display: "grid",
        width: "100%",
        height:"100%",
        gridTemplateColumns: getTicTacToeGridWithGameLines(gridWithGameLinesSize),
        gridTemplateRows: getTicTacToeGridWithGameLines(gridWithGameLinesSize),
        background:"yellow"};

    return (
        <>
            <div style={{height:"100vw", width:"100%", background:"blue"}}>
                <div style={gridStyle}>
                    <FieldLine TicTacToeSize={gridWithGameLinesSize} Horizontal={true} ></FieldLine>
                    <FieldLine TicTacToeSize={gridWithGameLinesSize} Horizontal={false} ></FieldLine>
                    <FieldSelected></FieldSelected>
                </div>
            </div>
        </>
    )



}