import React from "react";
import ElevatedVertical from "../../UI/Layout/ElevatedVertical";
import Horizontal from "../../UI/Layout/Horizontal";
import Avatar from "../../UI/Icons/Avatar";
import Vertical from "../../UI/Layout/Vertical";
import Label from "../../UI/UIComponents/Label";
import FormatDate from "../../../Util/FormatDate";
import Button from "../../UI/UIComponents/Button";
import Icons from "../../../Util/Icons";
import Img from "../../UI/UIComponents/Img";
import ProgressBar from "@ramonak/react-progress-bar";
import FundsProgressBar from "../../UI/UIComponents/ProgressBar";

export default ({work, employmentDate}) => {
    return <ElevatedVertical>
        {work != null ? displayWork(work, employmentDate) : displayAbsence()}
    </ElevatedVertical>
}

function displayWork({
                         src,
                         name,
                         moneyWage,
                         currentMoneyAccumulation,
                         maxMoneyAccumulation,
                         xpWage,
                         maxXpAccumulation,
                         currentXpAccumulation,
                     }, employmentDate) {
    return <>
        <Horizontal justifyContent={"flex-start"}>
            <Avatar src={src}/>
            <Vertical alignItems={"flex-start"} gap={"none"}>
                <Label text={name} size={"bigger"}/>
                <Label text={`Работа с ${FormatDate(employmentDate)}`}/>
            </Vertical>
        </Horizontal>

        <Vertical alignItems={"flex-start"} gap={"0.3vmax"}>
            <Horizontal justifyContent={"flex-start"}>
                <Img src={Icons.wallet} size={"small"}/>
                <Label text={`$${currentMoneyAccumulation}/${maxMoneyAccumulation} (${moneyWage} в час)`}/>
            </Horizontal>
            <FundsProgressBar currentValue={currentMoneyAccumulation} maxValue={maxMoneyAccumulation}/>
        </Vertical>

        <Vertical alignItems={"flex-start"} gap={"0.3vmax"}>
            <Horizontal justifyContent={"flex-start"}>
                <Img src={Icons.books} size={"small"}/>
                <Label text={`$${currentXpAccumulation}/${maxXpAccumulation} (${xpWage} в час)`}/>
            </Horizontal>
            <FundsProgressBar currentValue={currentXpAccumulation} maxValue={maxXpAccumulation}/>
        </Vertical>


        <Horizontal>
            <Button text={"Собрать"}/>
            <Button text={"Уволиться"}/>
        </Horizontal>
    </>
}

function displayAbsence() {
    return <>
        <Label text={"Вы безработны"} size={"bigger"} textAlign={"center"} fontStyle={"italic"}/>
    </>
}