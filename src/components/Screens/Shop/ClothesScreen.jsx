import React from "react";
import Page from "../../UI/Page/Page";
import List from "../../UI/Layout/List";
import Clothes from "../../UI/ListItems/deprecated/Clothes";
import {useSelector} from "react-redux";

export default ({}) => {
    const clothes = useSelector(state => state?.content?.value?.shop?.clothes)

    return <Page title={"Одежда"}>
        <List>
            {clothes?.map(v => <Clothes dto={v}/>)}
        </List>
    </Page>
}