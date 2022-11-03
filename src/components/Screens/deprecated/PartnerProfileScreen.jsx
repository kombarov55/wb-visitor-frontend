import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import PageContent from "../UI/Layout/PageContent";
import Title from "../UI/UIComponents/Title";
import WithFooterAndHeader from "../UI/Page/WithFooterAndHeader";
import Button from "../UI/UIComponents/Button";
import Label from "../UI/UIComponents/Label";
import axios from "axios";
import Links from "../../Util/Links";

export default ({}) => {
    const navigate = useNavigate()
    const loginData = JSON.parse(window.localStorage.getItem("login_data"))

    const [partner, setPartner] = useState({
        "points": "",
        "clientsCount": ""
    })

    useEffect(() => axios.get(Links.findPartnerByLoginStrict(loginData.login))
        .then(rs => setPartner(rs.data)), [])

    return <>
        <WithFooterAndHeader>
            <PageContent justifyContent={"flex-start"} alignItems={"stretch"}>
                <Title text={"Профиль"}/>
                <Label text={`Логин: ${loginData.login}`}/>
                <Label text={`Ваши бонусы: ${partner.points}`}/>
                <Label text={`Количество ваших профилей: ${partner.clientsCount}`}/>
                <Button text={"Выход"} onClick={() => {
                    window.localStorage.removeItem("login_data")
                    navigate("/login")
                }}/>
            </PageContent>
        </WithFooterAndHeader>
    </>

}