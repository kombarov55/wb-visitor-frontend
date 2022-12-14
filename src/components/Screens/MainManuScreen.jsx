import React from "react";
import Page from "../UI/Page/Page";
import Vertical from "../UI/Layout/Vertical";
import TaskGroupComponent from "./TaskGroup/TaskGroupComponent";
import PhonesStatusComponent from "./PhonesStatus/PhonesStatusComponent";
import ProxyComponent from "./ProxyComponent";

export default ({}) => {
    return <Page title={"Администрирование"}>
        <Vertical>
            <TaskGroupComponent/>
            <PhonesStatusComponent/>
            <ProxyComponent/>
        </Vertical>
    </Page>
}