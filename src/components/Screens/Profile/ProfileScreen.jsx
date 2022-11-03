import React from "react";
import {useNavigate} from "react-router-dom";
import Vertical from "../../UI/Layout/Vertical";
import Page from "../../UI/Page/Page";
import AccountInfoComponent from "./AccountInfoComponent";
import FundsComponent from "./FundsComponent";
import CurrentWorkComponent from "./CurrentWorkComponent";
import Button from "../../UI/UIComponents/Button";
import ElevatedVertical from "../../UI/Layout/ElevatedVertical";
import Horizontal from "../../UI/Layout/Horizontal";

export default () => {
    const navigate = useNavigate()

    const account = {
        src: "https://sun1-25.userapi.com/s/v1/ig2/k86VwksM-5qLte5T4acaWr-qOL9bWXxUXaIYAHtyvfFbkBWkrFNBGcko3rxa0mkFtxKKXcVxXRbOfzqoIAwVogmB.jpg?size=50x50&quality=96&crop=126,0,342,342&ava=1",
        name: "Николай",
        userid: "3316002938",
        registrationDate: new Date().toDateString(),
        money: 666,
        xp: 10000,
        employmentDate: new Date().toDateString(),
        currentWork: {
            name: "Курьер",
            src: "https://play-lh.googleusercontent.com/m6-gFunvj7aQD5fdv8EdJZBN5M4REIobTaPZPYS0K5Td7CNYnazN7fOKiPwwaY3hJw",
            moneyWage: 200,
            currentMoneyAccumulation: 10000,
            maxMoneyAccumulation: 16000,
            xpWage: 50,
            maxXpAccumulation: 1000,
            currentXpAccumulation: 100
        }
    }

    return <Page title={"Профиль"}>
        <Vertical>
            <AccountInfoComponent account={account}/>
            <FundsComponent account={account}/>
            <CurrentWorkComponent work={account.currentWork} employmentDate={account.employmentDate}/>
            <ElevatedVertical gap={"none"}>
                <Horizontal>
                    <Button text={"Магазин"} onClick={() => navigate("/shop")}/>
                    <Button text={"Вакансии"} onClick={() => navigate("/work-list")}/>
                </Horizontal>
                <Horizontal>
                    <Button text={"Образование"} onClick={() => navigate("/education")}/>
                    <Button text={"Главное меню"} onClick={() => navigate("/")}/>
                </Horizontal>
            </ElevatedVertical>
        </Vertical>
    </Page>
}