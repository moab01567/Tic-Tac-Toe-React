import React from "react";


interface Props{
    x:number,
    y:number
    label:string
}

export default function FieldSelected(){

    const filedStyle = {background:"blue",
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        gridColumn:"1",
        gridRow:"1",
    }

    return <>
        <div style={filedStyle}>
            hei, love u jani ❤️❤️❤️❤️
        </div>
    </>
}