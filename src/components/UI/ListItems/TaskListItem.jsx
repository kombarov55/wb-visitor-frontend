import React from "react";
import Horizontal from "../Layout/Horizontal";
import Vertical from "../Layout/Vertical";
import Label from "../UIComponents/Label";
import ProgressBar from "../UIComponents/ProgressBar";

export default ({v}) => {
    return <div style={{
        border: "1px solid black",
        borderRadius: "10px",
        padding: "1vmin"
    }}>
        <Horizontal width={"20vmax"} height={"100%"}>
            <img src={v["img"]} style={{height: "3vmax", width: "3vmax"}}/>
            <Vertical justifyContent={"space-between"}>
                <Vertical alignItems={"flex-start"} gap={""}>
                    <Label text={v["name"]} fontSize={"1vmin"}/>
                    <Label text={v["article"]} fontSize={"0.5vmin"}/>
                </Vertical>
                <ProgressBar currentValue={v["current_amount"]}
                             maxValue={v["max_amount"]}
                             width={"15vmax"}
                />
            </Vertical>
        </Horizontal>
    </div>
}