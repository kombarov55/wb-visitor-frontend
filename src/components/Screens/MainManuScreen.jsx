import React from "react";
import Page from "../UI/Page/Page";
import ElevatedVertical from "../UI/Layout/ElevatedVertical";
import Label from "../UI/UIComponents/Label";
import Vertical from "../UI/Layout/Vertical";
import TaskGroupComponent from "./TaskGroup/TaskGroupComponent";

export default ({}) => {
    return <Page title={"Главное меню"}>
        <Vertical>
            <TaskGroupComponent/>
            <ElevatedVertical>
                <Label text={"Комментарии"}/>
                <br/>
            </ElevatedVertical>
            <ElevatedVertical>
                <Label text={"Комментарии со сравнением между артикулами"} />
                <br/>
            </ElevatedVertical>
            <ElevatedVertical>
                <Label text={"Статус номеров"}/>
                <br/>
            </ElevatedVertical>
        </Vertical>
    </Page>
}