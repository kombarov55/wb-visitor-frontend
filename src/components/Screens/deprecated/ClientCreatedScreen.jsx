import React from "react";
import PageContent from "../UI/Layout/PageContent";
import Label from "../UI/UIComponents/Label";
import {useSearchParams} from "react-router-dom";
import {BsInstagram, BsTelegram, BsWhatsapp} from "react-icons/bs";
import SocialButton from "../UI/UIComponents/SocialButton";

export default ({}) => {
    const [params] = useSearchParams();

    return <>
        <PageContent alignItems={"flex-start"} justifyContent={"flex-start"}>
            <img src={"logo.png"} style={{width: "100%", marginBottom: "15vh"}}/>
            <Label size={"big"} text={"Спасибо за регистрацию!"} textAlign={"center"}/>
            <Label text={`Ваш номер телефона (${params.get("phone")}) будет являться номером пользователя.`}/>
            <br/>
            <Label text={`Теперь вы можете оформить заказ или задать вопрос нашему менеджеру в удобном для вас приложении:`}/>
            <Label text={`(для перехода нажмите на кнопку)`}/>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                width: "100%",
                gap: "3vw"
            }}>
                <SocialButton iconComponent={<BsInstagram style={{"height": "3vmax", width: "3vmax"}}/>}
                              url={"https://www.instagram.com/vikupbrendov.rf/"}
                              text={"Instagram"}
                              background={"pink"}
                />
                <SocialButton iconComponent={<BsWhatsapp style={{"height": "3vmax", width: "3vmax"}}/>}
                              url={"https://api.whatsapp.com/send/?phone=79277809082/"}
                              text={"WhatsApp"}
                              background={"green"}
                              color={"white"}
                />
                <SocialButton iconComponent={<BsTelegram style={{"height": "3vmax", width: "3vmax"}}/>}
                              url={"https://t.me/vykupbrandrf"}
                              text={"Telegram"}
                              background={"#5494e3"}
                              color={"white"}
                />
            </div>
        </PageContent>
    </>
}