import React from "react";
import Page from "../../UI/Page/Page";
import List from "../../UI/Layout/List";
import Gadget from "../../UI/ListItems/deprecated/Gadget";
import {useSelector} from "react-redux";
import Vehicle from "../../UI/ListItems/deprecated/Vehicle";

export default ({}) => {
    const cars = useSelector(state => state?.content?.value?.shop?.vehicles?.cars)

    return <Page title={"Автомобили"}>
        <List>
            {cars?.map(v => <Vehicle dto={v}/>)}
        </List>
    </Page>
}