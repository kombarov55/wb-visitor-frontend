import React from "react";

export default ({src, text, onClick}) => (
    <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "3vw",

        border: "1px solid white",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",

        padding: "0.5vmax 0.7vmax",

        color: "black",
        background: "white"

    }} onClick={() => onClick()}>
        <img src={src} style={{
            marginTop: "0.5vh",
            height: "2.5vmax",
            width: "2.5vmax"
        }}/>
        <div style={{fontSize: "2.5vmax", fontWeight: "bold"}}>{text}</div>
    </div>
)