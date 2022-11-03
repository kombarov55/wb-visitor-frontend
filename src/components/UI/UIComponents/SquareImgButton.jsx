import React from "react";
import Label from "./Label";
import {useNavigate} from "react-router-dom";

export default ({src, text, path}) => {
    const navigate = useNavigate()

    return <div style={{
        display: "flex",
        flexDirection: "column",


        width: "8vmax",
        height: "8vmax"
    }} onClick={() => navigate(path)}>
        <img src={src}/>
        <Label size={"medium"} text={text} textAlign={"center"}/>
    </div>
}