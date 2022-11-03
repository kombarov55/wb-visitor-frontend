import React from "react";
import {useNavigate} from "react-router-dom";
import Button from "../UIComponents/Button";

export default ({}) => {
    const navigate = useNavigate()


    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%"
        }}>
            <div style={{
                fontSize: "1.5vmax"
            }}>Все права защищены</div>
            <Button text={"экран1"} onClick={() => navigate("/error")}/>
        </div>
    )
}