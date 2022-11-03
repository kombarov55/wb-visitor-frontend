import React from "react";
import Page from "../../UI/Page/Page";
import List from "../../UI/Layout/List";
import Vehicle from "../../UI/ListItems/deprecated/Vehicle";
import GetContent from "../../../Util/GetContent";

export default ({}) => {
    const content = GetContent()

    const vehicles = content.shop.vehicles.cars

    return <Page title={"Транспорт"}>
        <List>
            {
                vehicles.map(v => <Vehicle dto={v}/>)
            }
        </List>
    </Page>
}