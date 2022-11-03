import React from "react";
import ElevatedVertical from "../../UI/Layout/ElevatedVertical";
import Horizontal from "../../UI/Layout/Horizontal";
import Img from "../../UI/UIComponents/Img";
import Icons from "../../../Util/Icons";
import Label from "../../UI/UIComponents/Label";
import Button from "../../UI/UIComponents/Button";
import Vertical from "../../UI/Layout/Vertical";

export default ({}) => {
    return <ElevatedVertical>
        <Horizontal justifyContent={"flex-start"} align>
            <Img src={Icons.courier}/>
            <Vertical alignItems={"flex-start"} gap={"0"}>
                <Label text={"Курьер"}/>
                <Label text={"28:21"} color={"#5f5f5f"}/>
            </Vertical>
        </Horizontal>

        <Label text={"На работе с 27.08.2022"}/>

        <Horizontal justifyContent={"flex-start"}>
            <Horizontal justifyContent={"flex-start"}>
                <Img src={Icons.coins} size={"small"}/>
                <Label text={"$50 в час"}/>
            </Horizontal>
            <Horizontal justifyContent={"flex-start"}>
                <Img src={Icons.books} size={"small"}/>
                <Label text={"10 xp в час"}/>
            </Horizontal>
        </Horizontal>

        <Button text={"Уволиться"}/>
    </ElevatedVertical>
}