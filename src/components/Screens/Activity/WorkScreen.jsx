import React from "react";
import Page from "../../UI/Page/Page";
import Vertical from "../../UI/Layout/Vertical";
import BalanceComponent from "./BalanceComponent";
import CurrentJobComponent from "./CurrentJobComponent";
import Button from "../../UI/UIComponents/Button";
import ElevatedVertical from "../../UI/Layout/ElevatedVertical";
import Label from "../../UI/UIComponents/Label";
import {useNavigate} from "react-router-dom";
import Horizontal from "../../UI/Layout/Horizontal";
import CurrentWorkComponent from "../Profile/CurrentWorkComponent";

export default ({}) => {
    const navigate = useNavigate()

    const work = {
        name: "Курьер",
        src: "https://play-lh.googleusercontent.com/m6-gFunvj7aQD5fdv8EdJZBN5M4REIobTaPZPYS0K5Td7CNYnazN7fOKiPwwaY3hJw",
        moneyWage: 200,
        currentMoneyAccumulation: 10000,
        maxMoneyAccumulation: 16000,
        xpWage: 50,
        maxXpAccumulation: 1000,
        currentXpAccumulation: 100
    }

    return <Page title={"Работа"}>
        <Vertical>
            <BalanceComponent money={"500"} xp={1000}/>
            <CurrentWorkComponent work={work} employmentDate={new Date().toDateString()}/>
            <ElevatedVertical>
                <Button text={"Вакансии"} onClick={() => navigate("/work-list")}/>
            </ElevatedVertical>
        </Vertical>
    </Page>
}