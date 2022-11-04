import React, {useEffect, useState} from "react";
import axios from "axios";
import Links from "../../../Util/Links";
import Label from "../../UI/UIComponents/Label";
import Spinner from "../../UI/Icons/Spinner";
import Grid from "../../UI/Layout/Grid";
import Vertical from "../../UI/Layout/Vertical";
import FormatDate from "../../../Util/FormatDate";
import Horizontal from "../../UI/Layout/Horizontal";
import TaskListItem from "../../UI/ListItems/TaskListItem";

export default ({id}) => {

    const [dto, setDto] = useState(null)

    useEffect(() => {
        axios.get(Links.taskGroupById(id))
            .then(rs => {
                console.log(rs.data)
                setDto(rs.data)
            })
    }, [])

    function targetValue() {
        if (dto["target_type"] != "По артикулу") {
            const name = dto["target_type"] == "По бренду" ?
                `Бренд: ${dto["target_value"]}` :
                `Id магазина: ${dto["target_value"]}`
            return <Label text={name}/>
        } else {
            return <></>
        }
    }

    function interval() {
        let xs = []

        if (dto["days"] != 0) {
            xs.push(dto["days"] + " день(дней)")
        }
        if (dto["hours"] != 0) {
            xs.push(dto["hours"] + " час(ов)")
        }
        if (dto["minutes"] != 0) {
            xs.push(dto["minutes"] + " минут(а)")
        }
        if (dto["seconds"] != 0) {
            xs.push(dto["seconds"] + " секунд(а)")
        }

        return "Интервал: " + xs.join(", ")
    }

    return <>
        {
            dto == null ?
                <Spinner/> :
                <Vertical margin={"1vmax 0"} width={"98%"}>
                    <Label text={"Параметры:"} size={"normal"}/>
                    <Horizontal>
                        <Vertical margin={"1vmax 0"} width={"98%"} alignItems={"flex-start"}>
                            <Label text={"Задание: " + dto["task_type"]}/>
                            <Label text={"Поиск: " + dto["target_type"]}/>
                            {targetValue()}
                            <Label text={"Количество артикулов: " + dto["task_count"]}/>
                        </Vertical>
                        <Vertical margin={"1vmax 0"} width={"98%"} alignItems={"flex-start"}>
                            <Label text={`Количество действий на каждый артикул: ${dto["amount"]}`}/>
                            <Label text={`Сделано на текущий момент: ${dto["current_amount"]}`}/>
                            <Label text={`Всего требуется действий: ${dto["max_amount"]}`}/>
                        </Vertical>

                        <Vertical margin={"1vmax 0"} width={"98%"} alignItems={"flex-start"}>
                            <Label text={interval()}/>
                            <Label text={`Дата начала: ${FormatDate(dto["start_datetime"])}`}/>
                            <Label text={`Примерная дата окончания: ${FormatDate(dto["end_datetime"])}`}/>
                        </Vertical>
                    </Horizontal>
                    <Label text={"Артикулы:"} size={"normal"}/>
                    <Grid>
                        {dto["tasks"].map(v => <TaskListItem v={v}/>)}
                    </Grid>
                </Vertical>
        }
    </>
}