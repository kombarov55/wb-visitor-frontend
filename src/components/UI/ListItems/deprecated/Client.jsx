import React from "react";
import Label from "../UIComponents/Label";

export default ({dto}) => {
    const {login, id, partnerId, fio, address, postIndex, email, phone, country} = dto

    return (
        <div key={id} style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
            padding: "1vmax"
        }}>
            <Label size={"medium"}
                   text={login}
            />

            <Label size={"small"}
                   text={`Код пользователя: ${id}`}
            />

            <Label size={"small"}
                   text={`Код партнёра: ${partnerId}`}
            />

            <Label size={"small"}
                   text={`ФИО: ${fio}`}
            />

            <Label size={"small"}
                   text={`Индекс: ${postIndex}`}
            />
            <Label size={"small"}
                   text={`Телефон: ${phone}`}
            />
            <Label size={"small"}
                   text={`Адрес: ${address}`}
            />
            <Label size={"small"}
                   text={`Почта: ${email}`}
            />
            <Label size={"small"}
                   text={`Страна: ${country}`}
            />
        </div>
    )
}