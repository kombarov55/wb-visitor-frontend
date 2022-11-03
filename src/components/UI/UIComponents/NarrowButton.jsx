import React from "react";

export default function ({text, onClick, width="100%", fontSize="1.5vmax", enabled = true}) {
    return (
        <div style={{
            alignSelf: "center",
            padding: "1vmax 0",
            margin: "0.5vmax 0",
            width: width,
            textAlign: "center",
            background: enabled ? "black" : "white",
            color: enabled ? "white" : "black",
            fontWeight: "bold",
            fontSize: fontSize,
            boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        }} onClick={() => enabled && onClick()}>
            {text}
        </div>
    )
}