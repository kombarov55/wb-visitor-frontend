import React from "react";
import Page from "../UI/Page/Page";
import Vertical from "../UI/Layout/Vertical";
import TaskGroupComponent from "./TaskGroup/TaskGroupComponent";
import CommentsComponent from "./Comments/CommentsComponent";
import ComparisonCommentsComponent from "./ComparisonComments/ComparisonCommentsComponent";
import PhonesStatusComponent from "./PhonesStatus/PhonesStatusComponent";

export default ({}) => {
    return <Page title={"Администрирование"}>
        <Vertical>
            <TaskGroupComponent/>
            <CommentsComponent/>
            <ComparisonCommentsComponent/>
            <PhonesStatusComponent/>
        </Vertical>
    </Page>
}