import React from "react";
import WithFooterAndHeader from "../UI/Page/WithFooterAndHeader";
import PageContent from "../UI/Layout/PageContent";
import Title from "../UI/UIComponents/Title";
import Button from "../UI/UIComponents/Button";
import {useNavigate, useSearchParams} from "react-router-dom";
import Label from "../UI/UIComponents/Label";

export default ({}) => {
    const navigate = useNavigate()
    const [params] = useSearchParams()

    return <>
        <WithFooterAndHeader>
            <PageContent>
                <Title text={"Бонусы добавлены"}/>
                <Label text={`Накоплено ${params.get("points")} бонусов`}/>
                <Button text={"Назад"} onClick={() => navigate("/manager_home")}/>
            </PageContent>
        </WithFooterAndHeader>
    </>
}