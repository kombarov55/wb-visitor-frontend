import React from "react";

export default ({iconComponent, text, url, background = "black", color = "black"}) => (
    <a href={url} style={{color: "black", textDecoration: "none"}}>
        <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "3vw",

            border: "4px solid transparent",
            boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",

            padding: "0.5vmax 0.7vmax",

            color: color,
            background: background

        }}>
            {iconComponent}
            <div style={{fontSize: "2.5vmax"}}>
                {text}
            </div>
        </div>
    </a>
)