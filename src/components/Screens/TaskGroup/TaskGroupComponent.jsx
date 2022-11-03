import React, {useState} from "react"
import ElevatedVertical from "../../UI/Layout/ElevatedVertical";
import Label from "../../UI/UIComponents/Label";
import Button from "../../UI/UIComponents/Button";
import AddTaskGroupForm from "./AddTaskGroupForm";
import TaskGroupListItem from "../../UI/ListItems/TaskGroupListItem";

export default ({}) => {

    const [isAddingLikes, setIsAddingLikes] = useState(false)

    return <>
        <ElevatedVertical>
            <Label text={"Активные задания"} size={"medium"}/>
            <br/>
            <ElevatedVertical margin={"0"} width={"98%"}>
                {/*<Label text={"Отсутствуют..."} fontStyle={"italic"}/>*/}
                <TaskGroupListItem label={"Добавление лайков"} currentValue={50} maxValue={100}/>
            </ElevatedVertical>
            {
                !isAddingLikes ?
                    <Button text={"Добавить"} onClick={() => setIsAddingLikes(true)}/> :
                    <AddTaskGroupForm afterSubmit={() => setIsAddingLikes(false)}/>
            }
        </ElevatedVertical>
    </>
}