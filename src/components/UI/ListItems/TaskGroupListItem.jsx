import React from "react";
import Horizontal from "../Layout/Horizontal";
import Label from "../UIComponents/Label";
import ProgressBar from "../UIComponents/ProgressBar";
import ListItemButton from "../UIComponents/ListItemButton";

export default ({label, currentValue, maxValue}) => {
    return <>
        <Horizontal justifyContent={"space-between"}>
            <Horizontal justifyContent={"flex-start"}>
                <Label text={label}/>
                <Label text={"0"}/>
                <ProgressBar currentValue={currentValue} maxValue={maxValue}/>
                <Label text={maxValue}/>
            </Horizontal>
            <Horizontal justifyContent={"flex-end"}>
                <ListItemButton text={"Подробнее"} backgroundColor={"black"}/>
                <ListItemButton text={"Отменить"}/>
            </Horizontal>
        </Horizontal>
    </>
}