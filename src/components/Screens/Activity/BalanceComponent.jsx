import React from "react";
import Horizontal from "../../UI/Layout/Horizontal";
import Img from "../../UI/UIComponents/Img";
import Icons from "../../../Util/Icons";
import Label from "../../UI/UIComponents/Label";
import ElevatedVertical from "../../UI/Layout/ElevatedVertical";

export default ({money, xp}) => {
    return <ElevatedVertical>
        <Horizontal justifyContent={"flex-start"}>
            <Img src={Icons.wallet} size={"small"}/>
            <Label text={`Баланс: $${money}`}/>
        </Horizontal>

        <Horizontal justifyContent={"flex-start"}>
            <Img src={Icons.books} size={"small"}/>
            <Label text={`Опыт: ${xp} xp`}/>
        </Horizontal>
    </ElevatedVertical>
}