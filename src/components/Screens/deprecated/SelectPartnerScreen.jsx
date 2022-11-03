import React from "react";
import PageContent from "../UI/Layout/PageContent";
import Label from "../UI/UIComponents/Label";
import Horizontal from "../UI/Layout/Horizontal";
import Icon from "../UI/UIComponents/Icon";
import SubmitButton from "../UI/Form/SubmitButton";
import TextInput from "../UI/Form/TextInput";
import {Form, Formik} from "formik";
import axios from "axios";
import Links from "../../Util/Links";
import {useNavigate} from "react-router-dom";

export default function ({}) {
    const navigate = useNavigate();

    return <>
        <Formik initialValues={{query: ""}} onSubmit={(values, {setSubmitting}) => {
            axios.get(Links.findPartnerById(values.query))
                .then(rs => {
                    setSubmitting(false)
                    const {found, id, login, points} = rs.data
                    if (found) {
                        navigate(`/add_points?id=${id}&login=${login}&points=${points}`)
                    } else {
                        alert("Партнёр не найден")
                    }
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
                        <Label size={"big"} text={"Введите номер партнёра:"}/>

                        <TextInput label={"Номер:"} name="query"/>
                        <SubmitButton text={"Поиск"} isSubmitting={isSubmitting}/>
                    </PageContent>
                </Form>
            )}
        </Formik>
    </>
}