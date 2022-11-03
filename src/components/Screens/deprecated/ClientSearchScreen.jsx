import React, {useEffect, useState} from "react";
import TextInput from "../UI/Form/TextInput";
import {Form, Formik} from "formik";
import Title from "../UI/UIComponents/Title";
import PageContent from "../UI/Layout/PageContent";
import SubmitButton from "../UI/Form/SubmitButton";
import Horizontal from "../UI/Layout/Horizontal";
import Icon from "../UI/UIComponents/Icon";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Links from "../../Util/Links";
import List from "../UI/Layout/List";
import Client from "../UI/ListItems/Client";

export default function () {
    const navigate = useNavigate()

    const [clients, setClients] = useState([])

    useEffect(() => {
        axios.get(Links.getClients(0, 10))
            .then(rs => setClients(rs.data))
    }, [])


    return (
        <Formik initialValues={{query: ""}} onSubmit={(values, {setSubmitting}) => {
            axios.get(Links.findClientById(values.query))
                .then(rs => {
                    setSubmitting(false)
                    setClients(rs.data)
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
                        <Title text={"Поиск Клиента"}/>

                        <TextInput label={"Номер:"} name="query"/>
                        <SubmitButton text={"Поиск"} isSubmitting={isSubmitting}/>

                        <List>
                            {clients.map(v => <Client dto={v}/>)}
                        </List>
                    </PageContent>
                </Form>
            )}
        </Formik>
    )
}