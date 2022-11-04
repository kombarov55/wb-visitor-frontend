import React, {useEffect, useState} from "react"
import ElevatedVertical from "../../UI/Layout/ElevatedVertical";
import Label from "../../UI/UIComponents/Label";
import Button from "../../UI/UIComponents/Button";
import AddTaskGroupForm from "./AddTaskGroupForm";
import TaskGroupListItem from "../../UI/ListItems/TaskGroupListItem";
import axios from "axios";
import Links from "../../../Util/Links";

export default ({}) => {

    const [taskGroups, setTaskGroups] = useState([])

    useEffect(() => loadTaskGroups(), [])

    const [isAddingLikes, setIsAddingLikes] = useState(false)

    function loadTaskGroups() {
        axios.get(Links.taskGroupShort).then(rs => {
            console.log(rs.data)
            setTaskGroups(rs.data)
        })
    }

    return <>
        <ElevatedVertical>
            <Label text={"Активные задания"} size={"medium"}/>
            <br/>
            <ElevatedVertical margin={"0"} width={"98%"}>
                {
                    taskGroups.length == 0 ?
                        <Label text={"Отсутствуют..."} fontStyle={"italic"}/> :
                        taskGroups.map(dto => <TaskGroupListItem dto={dto}/>)
                }
            </ElevatedVertical>
            {
                !isAddingLikes ?
                    <Button text={"Добавить"} onClick={() => setIsAddingLikes(true)}/> :
                    <AddTaskGroupForm afterSubmit={() => setIsAddingLikes(false)}/>
            }
        </ElevatedVertical>
    </>
}