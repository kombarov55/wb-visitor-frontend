import React from "react";
import Page from "../../UI/Page/Page";
import List from "../../UI/Layout/List";
import Gadget from "../../UI/ListItems/deprecated/Gadget";
import GetContent from "../../../Util/GetContent";
import {useSelector} from "react-redux";

export default ({}) => {
    const computers = useSelector(state => state?.content?.value?.shop?.gadgets?.computers)

    return <Page title={"Гаджеты"}>
        <List>
            {computers?.map(v => <Gadget dto={v}/>)}
        </List>
    </Page>
}