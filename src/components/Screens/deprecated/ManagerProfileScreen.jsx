import React from "react";
import {useNavigate} from "react-router-dom";
import PageContent from "../UI/Layout/PageContent";
import Title from "../UI/UIComponents/Title";
import Button from "../UI/UIComponents/Button";
import Label from "../UI/UIComponents/Label";
import parseRole from "../../Util/parseRole";
import Icon from "../UI/UIComponents/Icon";
import Horizontal from "../UI/Layout/Horizontal";

export default ({}) => {
    const navigate = useNavigate()
    const loginData = JSON.parse(window.localStorage.getItem("login_data"))
    return <>
        <Horizontal justifyContent={"flex-end"} width={"95%"} padding={"5vw 0"}>
            <Icon name={"pi-home"} onClick={() => navigate("/manager_home")}/>
        </Horizontal>

        <PageContent justifyContent={"flex-start"} alignItems={"stretch"}>
            <Title text={"Профиль"}/>
            <Label text={`Логин: ${loginData.login}`}/>
            <Label text={`Роль: ${parseRole(loginData.role)}`}/>
            <Button text={"Выход"} onClick={() => {
                window.localStorage.removeItem("login_data")
                navigate("/login")
            }}/>
        </PageContent>
    </>
}