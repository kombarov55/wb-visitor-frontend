import React from "react";
import Icon from "./Icon";

export default props => (
    <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "3vw",

        border: "1px solid black",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",

        padding: "0.5vmax 0.7vmax",

        color: "white",
        background: "black"

    }} onClick={() => props.onClick()}>
        <Icon name={props.iconName} size={"2.5vmax"} color={"white"}/>
        <div style={{fontSize: "2.5vmax", fontWeight: "bold"}}>{props.text}</div>
    </div>
)