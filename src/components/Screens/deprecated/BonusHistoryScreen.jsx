import React, {useEffect, useState} from "react";
import WithFooterAndHeader from "../UI/Page/WithFooterAndHeader";
import PageContent from "../UI/Layout/PageContent";
import Title from "../UI/UIComponents/Title";
import List from "../UI/Layout/List";
import BonusHistory from "../UI/ListItems/BonusHistory";
import axios from "axios";
import Links from "../../Util/Links";
import {useSearchParams} from "react-router-dom";

export default ({}) => {

    const [params] = useSearchParams()
    const [list, setList] = useState([])

    useEffect(() => {
        axios.get(Links.findBonusHistory(params.get("partner_id")))
            .then(rs => setList(rs.data))
    }, [])

    return <>
        <WithFooterAndHeader>
            <PageContent justifyContent={"flex-start"}>
                <Title text={"История"}/>
                <List>
                    {list.map(v => <BonusHistory dto={v}/>)}
                </List>
            </PageContent>
        </WithFooterAndHeader>
    </>
}