import React from "react";
import Page from "../../UI/Page/Page";
import List from "../../UI/Layout/List";
import Icons from "../../../Util/Icons";
import Clothes from "../../UI/ListItems/deprecated/Clothes";
import RealEstate from "../../UI/ListItems/deprecated/RealEstate";
import GetContent from "../../../Util/GetContent";

export default ({}) => {
    const content = GetContent()

    const realEstates = content.shop.realEstates.apartments

    return <Page title={"Недвижимость"}>
        <List>
            {realEstates.map(v => <RealEstate dto={v}/>)}
        </List>
    </Page>
}