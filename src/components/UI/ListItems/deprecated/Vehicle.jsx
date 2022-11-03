import React from "react";
import Vertical from "../../Layout/Vertical";
import Horizontal from "../../Layout/Horizontal";
import Img from "../../UIComponents/Img";
import Label from "../../UIComponents/Label";
import Button from "../../UIComponents/Button";
import Avatar from "../../Icons/Avatar";
import Icons from "../../../../Util/Icons";

export default ({dto}) => {
    const {src, name, description, price} = dto

    return <Vertical margin={"1vmax 10vmax"}
                     padding={"1vmax"}
                     width={"90%"}
                     alignItems={"stretch"}
                     boxShadowEnabled={true}
    >
        <Horizontal>
            <Horizontal justifyContent={"flex-start"} gap={"2vmax"}>
                <Avatar src={src}/>
                <Label text={name} size={"normal"}/>
            </Horizontal>

            <Button text={"Купить"}/>
        </Horizontal>
        <Horizontal justifyContent={"flex-start"}>
            <Horizontal>
                <Label text={description}/>
            </Horizontal>

            <Horizontal justifyContent={"flex-start"}>
                <Img src={Icons.wallet} size={"small"}/>
                <Label text={`$${price}`} fontWeight={"bold"}/>
            </Horizontal>
        </Horizontal>


    </Vertical>
}