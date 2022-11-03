import React from "react";
import Page from "../../UI/Page/Page";
import Icons from "../../../Util/Icons";
import Grid from "../../UI/Layout/Grid";
import SquareImgButton from "../../UI/UIComponents/SquareImgButton";

export default ({}) => {
    return <Page title={"Деятельность"}>
        <Grid>
            <SquareImgButton text={"Работа"} src={Icons.suitcase} path={"/work"}/>
            <SquareImgButton text={"Образование"} src={Icons.education} path={"/education"}/>
            <SquareImgButton text={"Бизнес"} src={Icons.business} path={"/business"}/>
            <SquareImgButton text={"Майнинг"} src={Icons.qr} path={"/mining"}/>
            <SquareImgButton text={"Казино"} src={Icons.casino} path={"/casino"}/>
            <SquareImgButton text={"Игры"} src={Icons.dice} path={"/games"}/>
        </Grid>
    </Page>
}