import React from "react";
import Page from "../../UI/Page/Page";
import Button from "../../UI/UIComponents/Button";
import ElevatedVertical from "../../UI/Layout/ElevatedVertical";
import Vertical from "../../UI/Layout/Vertical";
import {useNavigate} from "react-router-dom";

export default ({}) => {
    const navigate = useNavigate()

    return <Page title={"Типы гаджетов"}>
        <Vertical>
            <ElevatedVertical>
                <Button text={"Телефоны"} onClick={() => navigate("/gadgets/phones")}/>
                <Button text={"Компьютеры"} onClick={() => navigate("/gadgets/computers")}/>
            </ElevatedVertical>
        </Vertical>
    </Page>
}