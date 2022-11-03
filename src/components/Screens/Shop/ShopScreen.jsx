import React from "react";
import Page from "../../UI/Page/Page";
import Vertical from "../../UI/Layout/Vertical";
import ElevatedVertical from "../../UI/Layout/ElevatedVertical";
import Button from "../../UI/UIComponents/Button";
import {useNavigate} from "react-router-dom";

export default ({}) => {
    const navigate = useNavigate()

    return <Page title={"Магазин"}>
        <Vertical>
            <ElevatedVertical>
                <Button text={"Одежда"} onClick={() => navigate("/clothes")}/>
                <Button text={"Транспорт"} onClick={() => navigate("/vehicles/types")}/>
                <Button text={"Гаджеты"} onClick={() => navigate("/gadgets/types")}/>
                <Button text={"Недвижимость"} onClick={() => navigate("/real-estates")}/>

            </ElevatedVertical>
        </Vertical>
    </Page>
}