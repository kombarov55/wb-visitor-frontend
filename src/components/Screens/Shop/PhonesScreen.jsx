import React from "react";
import Page from "../../UI/Page/Page";
import List from "../../UI/Layout/List";
import Gadget from "../../UI/ListItems/deprecated/Gadget";
import {useSelector} from "react-redux";

export default ({}) => {
    const phones = useSelector(state => state?.content?.value?.shop?.gadgets?.phones)

    return <Page title={"Телефоны"}>
        <List>
            {phones?.map(v => <Gadget dto={v}/>)}
        </List>
    </Page>
}