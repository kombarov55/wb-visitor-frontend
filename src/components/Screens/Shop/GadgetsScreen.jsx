import React from "react";
import Page from "../../UI/Page/Page";
import List from "../../UI/Layout/List";
import Gadget from "../../UI/ListItems/deprecated/Gadget";
import GetContent from "../../../Util/GetContent";

export default ({}) => {
    const content = GetContent()

    const gadgets = content.shop.gadgets.phones

    return <Page title={"Гаджеты"}>
        <List>
            {gadgets.map(v => <Gadget dto={v}/>)}
        </List>
    </Page>
}