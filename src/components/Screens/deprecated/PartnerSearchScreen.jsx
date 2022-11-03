import React, {useEffect, useState} from "react";
import TextInput from "../UI/Form/TextInput";
import {Form, Formik} from "formik";
import Title from "../UI/UIComponents/Title";
import PageContent from "../UI/Layout/PageContent";
import SubmitButton from "../UI/Form/SubmitButton";
import Partner from "../UI/ListItems/Partner";
import Horizontal from "../UI/Layout/Horizontal";
import Icon from "../UI/UIComponents/Icon";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Links from "../../Util/Links";
import List from "../UI/Layout/List";

export default function () {
    const navigate = useNavigate()

    const [partners, setPartners] = useState([])

    useEffect(() => {
        axios.get(Links.getPartners())
            .then(rs => setPartners(rs.data))
    }, [])


    return (
        <Formik initialValues={{query: ""}} onSubmit={(values, {setSubmitting}) => {
            axios.get(Links.findPartnerByLogin(values.query))
                .then(rs => {
                    setPartners(rs.data)
                    setSubmitting(false)
                })
        }}
        >
            {({isSubmitting}) => (
                <Form>
                    <Horizontal justifyContent={"space-between"}
                                width={"90%"}
                                padding={"1vmax 2.5vmax"}>
                        <Icon name={"pi-angle-left"} onClick={() => navigate(-1)}/>
                        <Icon name={"pi-user"}/>
                    </Horizontal>
                    <PageContent justifyContent={"flex-start"}
                                 alignItems={"stretch"}
                    >
                        <Title text={"Поиск партнёра"}/>

                        <TextInput label={"Логин:"} name="query"/>
                        <SubmitButton text={"Поиск"} isSubmitting={isSubmitting}/>

                        <List>
                            {partners.map(v => <Partner dto={v} navigate={navigate}/>)}
                        </List>
                    </PageContent>
                </Form>
            )}
        </Formik>
    )
}