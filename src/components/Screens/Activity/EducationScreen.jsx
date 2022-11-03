import React from "react";
import Page from "../../UI/Page/Page";
import Vertical from "../../UI/Layout/Vertical";
import ElevatedVertical from "../../UI/Layout/ElevatedVertical";
import Label from "../../UI/UIComponents/Label";
import Education from "../../UI/ListItems/deprecated/Education";
import Icons from "../../../Util/Icons";
import List from "../../UI/Layout/List";
import {useSelector} from "react-redux";

export default ({}) => {
    let educations = useSelector(state => state?.content?.value?.activity?.educations)

    return <Page title={"Образование"}>
        <Vertical>
            <ElevatedVertical>
                <List>
                    {educations?.map(v => <Education dto={v}/>)}
                </List>
            </ElevatedVertical>
        </Vertical>
    </Page>
}