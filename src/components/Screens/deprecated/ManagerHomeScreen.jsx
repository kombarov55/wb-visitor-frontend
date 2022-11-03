import React from "react";
import {useNavigate} from "react-router-dom";
import WithFooterAndHeader from "../UI/Page/WithFooterAndHeader";
import ImgButton from "../UI/UIComponents/ImgButton";
import PageContent from "../UI/Layout/PageContent";

export default function(props) {

    const navigate = useNavigate();

    return (
        <WithFooterAndHeader>
            <PageContent alignItems={"stretch"}>
                <ImgButton iconName={"pi-user-plus"}
                           text={"Добавить партнёра"}
                           onClick={() => navigate("/partner_creation")}
                />

                <ImgButton iconName={"pi-users"}
                           text={"Поиск партнёров"}
                           onClick={() => navigate("/partner_search")}
                />

                <ImgButton iconName={"pi-plus-circle"}
                           text={"Добавить бонусы"}
                           onClick={() => navigate("/select_partner")}
                />

                <ImgButton iconName={"pi-search"}
                           text={"Поиск клиентов"}
                           onClick={() => navigate("/client_search")}
                />
            </PageContent>
        </WithFooterAndHeader>
    )

}