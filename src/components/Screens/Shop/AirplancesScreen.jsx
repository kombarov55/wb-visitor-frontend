import React from "react";
import Page from "../../UI/Page/Page";
import List from "../../UI/Layout/List";
import Gadget from "../../UI/ListItems/deprecated/Gadget";
import {useSelector} from "react-redux";
import Vehicle from "../../UI/ListItems/deprecated/Vehicle";

export default ({}) => {
    const airplanes = useSelector(state => state?.content?.value?.shop?.vehicles?.airplanes)

    return <Page title={"Самолёты"}>
        <List>
            {airplanes?.map(v => <Vehicle dto={v}/>)}
        </List>
    </Page>
}
