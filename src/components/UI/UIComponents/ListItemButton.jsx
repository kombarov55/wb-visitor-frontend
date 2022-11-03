import React from "react";

export default function ({text, onClick, backgroundColor = "darkred"}) {
    return (
        <div style={{
            alignSelf: "flex-start",
            padding: "0.5vmax 0",
            width: "10vmax",
            textAlign: "center",
            background: backgroundColor,
            color: "white",
            fontWeight: "bold",
            fontSize: "1.5vmin",
            boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
            borderRadius: "666px"
        }} onClick={() => onClick()}>
            {text}
        </div>
    )
}