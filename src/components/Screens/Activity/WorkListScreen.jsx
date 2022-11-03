import React from "react";
import Page from "../../UI/Page/Page";
import Work from "../../UI/ListItems/deprecated/Work";
import List from "../../UI/Layout/List";
import {useSelector} from "react-redux";

export default ({}) => {
    const works = useSelector(state => state?.content?.value?.activity?.works)

    return <Page title={"Список вакансий"}>
        <List>
            {works?.map(v => <Work dto={v}/>)}
        </List>
    </Page>
}