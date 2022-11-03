import React from "react";
import ElevatedVertical from "../../UI/Layout/ElevatedVertical";
import Horizontal from "../../UI/Layout/Horizontal";
import Avatar from "../../UI/Icons/Avatar";
import Vertical from "../../UI/Layout/Vertical";
import Label from "../../UI/UIComponents/Label";
import FormatDate from "../../../Util/FormatDate";

export default ({account}) => {
    const {src, name, userid, registrationDate} = account
    return <ElevatedVertical>
        <Horizontal>
            <Avatar
                src={src}/>
            <Vertical alignItems={"flex-start"} gap={"none"}>
                <Label text={name} size={"bigger"}/>
                <Label text={`user-id: ${userid}`}/>
                <Label text={`Дата регистрации: ${FormatDate(registrationDate)}`}/>
            </Vertical>
        </Horizontal>
    </ElevatedVertical>
}