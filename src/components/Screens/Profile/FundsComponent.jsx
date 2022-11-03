import React from "react";
import ElevatedVertical from "../../UI/Layout/ElevatedVertical";
import Horizontal from "../../UI/Layout/Horizontal";
import Img from "../../UI/UIComponents/Img";
import Icons from "../../../Util/Icons";
import Label from "../../UI/UIComponents/Label";

export default ({account}) => {
    const {money, xp} = account
    return <ElevatedVertical>
        <Horizontal justifyContent={"flex-start"} >
            <Img src={Icons.wallet} size={"small"}/>
            <Label text={`$${money}`}/>
        </Horizontal>
        <Horizontal justifyContent={"flex-start"}>
            <Img src={Icons.books} size={"small"}/>
            <Label text={`${xp} xp`}/>
        </Horizontal>
    </ElevatedVertical>
}