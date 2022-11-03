import React from "react";

export default ({size, name, onClick, color = "black"}) => (

    <i className={"pi " + name} style={{
        fontSize: size,
        marginTop: "0.8vh",
        color: color
    }} onClick={() => onClick()}/>
)