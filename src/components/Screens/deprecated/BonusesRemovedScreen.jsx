import React from "react";
import WithFooterAndHeader from "../UI/Page/WithFooterAndHeader";
import PageContent from "../UI/Layout/PageContent";
import Title from "../UI/UIComponents/Title";
import Button from "../UI/UIComponents/Button";
import {useNavigate} from "react-router-dom";

export default ({}) => {
    const navigate = useNavigate()

    return <>
        <WithFooterAndHeader>
            <PageContent>
                <Title text={"Бонусы обнулены"}/>
                <Button text={"Назад"} onClick={() => navigate("/manager_home")}/>
            </PageContent>
        </WithFooterAndHeader>
    </>
}