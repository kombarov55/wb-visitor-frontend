import React from "react";
import Page from "../../UI/Page/Page";
import Button from "../../UI/UIComponents/Button";
import ElevatedVertical from "../../UI/Layout/ElevatedVertical";
import Vertical from "../../UI/Layout/Vertical";
import {useNavigate} from "react-router-dom";

export default ({}) => {
    const navigate = useNavigate()

    return <Page title={"Типы транспорта"}>
        <Vertical>
            <ElevatedVertical>
                <Button text={"Автомобили"} onClick={() => navigate("/vehicles/cars")}/>
                <Button text={"Самолёты"} onClick={() => navigate("/vehicles/airplanes")}/>
                <Button text={"Вертолёты"} onClick={() => navigate("/vehicles/helicopters")}/>
                <Button text={"Яхты"} onClick={() => navigate("/vehicles/yachts")}/>
            </ElevatedVertical>
        </Vertical>
    </Page>
}