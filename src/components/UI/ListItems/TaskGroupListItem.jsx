import React, {useState} from "react";
import Horizontal from "../Layout/Horizontal";
import Label from "../UIComponents/Label";
import ProgressBar from "../UIComponents/ProgressBar";
import ListItemButton from "../UIComponents/ListItemButton";
import TaskGroupDetailComponent from "../../Screens/TaskGroup/TaskGroupDetailComponent";

export default ({dto}) => {
    const id = dto["id"]
    const taskType = dto["task_type"]
    const currentAmount = dto["current_amount"]
    const maxAmount = dto["max_amount"]
    const status = dto["status"]

    const [isShowDetail, setIsShowDetail] = useState(false)

    return <div key={id}>
        <Horizontal justifyContent={"space-between"} alignItems={"center"}>
            <Label text={taskType}/>
            <Horizontal justifyContent={"flex-start"} alignItems={"center"} width={""}>
                <Label text={"0"}/>
                <ProgressBar currentValue={currentAmount} maxValue={maxAmount ? maxAmount : 0}/>
                <Label text={maxAmount ? maxAmount : "???"}/>
            </Horizontal>
            <Horizontal justifyContent={"flex-end"} width={""}>
                <ListItemButton text={status} backgroundColor={"green"}/>
                <ListItemButton text={!isShowDetail ? "Подробнее" : "Закрыть"} backgroundColor={"black"} onClick={() => setIsShowDetail(!isShowDetail)}/>
            </Horizontal>
        </Horizontal>
        {
            isShowDetail && <TaskGroupDetailComponent id={id}/>
        }
    </div>
}