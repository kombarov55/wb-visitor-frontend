import React from "react";
import Vertical from "../../Layout/Vertical";
import Horizontal from "../../Layout/Horizontal";
import Img from "../../UIComponents/Img";
import Label from "../../UIComponents/Label";
import Button from "../../UIComponents/Button";

export default ({dto}) => {
    const {src, name, description, price} = dto

    return <Vertical margin={"1vmax 10vmax"}
                     padding={"1vmax"}
                     width={"90%"}
                     alignItems={"stretch"}
                     boxShadowEnabled={true}
    >
        <Horizontal justifyContent={"flex-start"} gap={"2vmax"}>
            <Img src={src}/>
            <Label text={name} size={"big"}/>
        </Horizontal>
        <Label text={description}/>
        <Label text={price} color={"rgb(11 155 82)"} fontWeight={"bold"}/>
        <Button text={"Купить"}/>
    </Vertical>
}