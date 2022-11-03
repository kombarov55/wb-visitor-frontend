import React from "react";
import Label from "../UIComponents/Label";
import Horizontal from "../Layout/Horizontal";
import Button from "../UIComponents/Button";
import axios from "axios";
import Links from "../../../Util/Links";
import Vertical from "../Layout/Vertical";

export default ({dto, navigate}) => {
    const {login, points, clientsCount} = dto

    return (
        <div key={login} style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
            padding: "1vmax"
        }}>
            <Label size={"medium"}
                   text={`Код пользователя: ${login}`}
            />

            <Label size={"small"}
                   text={`Бонусы: ${points}`}
            />

            <Label size={"small"}
                   text={`Количество профилей: ${clientsCount}`}
            />

            <>
                <Label size={"small"} text={`Ссылка для регистрации клиентов:`}/>
                <a href={Links.registerLink(login)}><Label size={"small"} text={Links.registerLink(login)}/></a>
            </>


            <Vertical>
                <Horizontal>
                    <Button text={"История операций"}
                            width={"45%"}
                            fontSize={"1vmax"}
                            onClick={() => navigate(`/bonus_history?partner_id=${login}`)}
                    />
                    <Button text={"Обнулить бонусы"}
                            width={"45%"}
                            fontSize={"1vmax"}
                            onClick={() => {
                                if (window.confirm(`Обнулить бонусы у ${login}?`)) {
                                    axios.post(Links.removeBonuses, {id: login})
                                        .then(rs => navigate("/bonuses_removed"))
                                }
                            }}
                    />
                </Horizontal>
                <Button text={"Добавить бонусы"} fontSize={"1vmax"}
                        onClick={() => navigate(`/add_points?id=${login}&login=${login}&points=${points}`)}/>
            </Vertical>
        </div>
    )
}