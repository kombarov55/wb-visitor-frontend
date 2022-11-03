import React from "react";
import Horizontal from "../../Layout/Horizontal";
import Vertical from "../../Layout/Vertical";
import Img from "../../UIComponents/Img";
import Icons from "../../../../Util/Icons";
import Label from "../../UIComponents/Label";
import Button from "../../UIComponents/Button";
import ElevatedVertical from "../../Layout/ElevatedVertical";

export default ({dto}) => {
    const {src, name, price, learned = false} = dto

    return <>
        <ElevatedVertical>
            <Horizontal justifyContent={"flex-start"}>
                <Img src={src} size={"normal"}/>
                <Label text={name} size={"normal"}/>
            </Horizontal>
            <Horizontal>
                <Horizontal justifyContent={"flex-start"} alignItems={"center"}>
                    <Img src={Icons.coins} size={"small"}/>
                    <Label text={`$${price}`}/>
                </Horizontal>

                <Button text={learned ? "Изучено" : "Купить"} enabled={!learned}/>
            </Horizontal>



        </ElevatedVertical>
    </>
}