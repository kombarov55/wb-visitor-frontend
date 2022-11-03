import React from "react";
import Vertical from "../../Layout/Vertical";
import Horizontal from "../../Layout/Horizontal";
import Img from "../../UIComponents/Img";
import Label from "../../UIComponents/Label";
import Button from "../../UIComponents/Button";
import Icons from "../../../../Util/Icons";
import Avatar from "../../Icons/Avatar";

export default ({dto}) => {
    const {src, name, description, moneyWage, xpWage, requirements} = dto

    return <Vertical margin={"1vmax 10vmax"}
                     padding={"1vmax"}
                     width={"90%"}
                     alignItems={"stretch"}
                     boxShadowEnabled={true}
                     gap={"1.5vmax"}
    >
        <Horizontal>
            <Horizontal justifyContent={"flex-start"} gap={"1vmax"}>
                <Avatar src={src}/>
                <Label text={name} size={"normal"}/>
            </Horizontal>

            <Button text={"Устроиться"}/>
        </Horizontal>

        <Horizontal>
            <Vertical alignItems={"flex-start"} gap={"0"}>
                <Label text={"Требования:"}/>
                {requirements.map(v => <Label text={`- ${v}`}/>)}
            </Vertical>

            <Vertical gap={"0.5vmax"}>
                <Horizontal justifyContent={"flex-start"}>
                    <Img src={Icons.wallet} size={"small"}/>
                    <Label text={`$${moneyWage} в час`}/>
                </Horizontal>
                <Horizontal justifyContent={"flex-start"}>
                    <Img src={Icons.books} size={"small"}/>
                    <Label text={`${xpWage} xp в час`}/>
                </Horizontal>
            </Vertical>
        </Horizontal>

    </Vertical>
}