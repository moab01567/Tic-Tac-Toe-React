import React, {useEffect, useState} from "react";


interface Props {
    TicTacToeSize:number
    Horizontal:boolean
}

interface FiledLine {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gridColumn: "1 / grid-column-end" | string,
    gridRow:  "1 / grid-row-end" | string,
}
interface Line {
    width: "1px" | string,
    height: "100%" | string,
    background:"black",
}

export default function FiledLine({TicTacToeSize, Horizontal}:Props){
    const [lineFields, setLineFields] = useState<FiledLine[]>([])

    useEffect(() => {
        const  newLineFields:FiledLine[] = []
        for (let i = 2; i < TicTacToeSize; i += 2) {
            console.log(i)
            newLineFields.push({display: "flex", justifyContent: "center",
                alignItems: "center",
                gridColumn: Horizontal? `${i}` : "1 / grid-column-end" ,
                gridRow: !Horizontal? `${i}` : "1 / grid-row-end",
            })
        }
        setLineFields(newLineFields)
    }, []);



    return<>
        {lineFields.map(lineField =>  (<div style={lineField}>
            <div style={{width: Horizontal? "1px": "100%" , height: !Horizontal ? "1px": "100%", background:"black"}}>

            </div>
        </div>))}
    </>
}