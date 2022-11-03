import React from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import axios from "axios";
import {Form, Formik} from "formik";
import Links from "../../Util/Links";
import Horizontal from "../UI/Layout/Horizontal";
import Icon from "../UI/UIComponents/Icon";
import PageContent from "../UI/Layout/PageContent";
import Label from "../UI/UIComponents/Label";
import TextInput from "../UI/Form/TextInput";
import SubmitButton from "../UI/Form/SubmitButton";
import isInt from "../../Util/isInt";

export default ({}) => {
    const [params] = useSearchParams()
    const navigate = useNavigate()

    return <>
        <Formik initialValues={{query: ""}} onSubmit={(values, {setSubmitting}) => {
            console.log(values)
            axios.post(Links.addBonuses, {id: params.get("id"), points: values.query})
                .then(rs => {
                    setSubmitting(false)

                    if (rs.data.success) {
                        navigate(`/bonuses_added?points=${rs.data.points}`)
                    } else {
                        alert("Произошла ошибка, попробуйте позже")
                    }
                })
        }}
                validate={values => {
                    const errors = {}

                    if (!isInt(values.query)) {
                        errors.query = "Введите число"
                    }

                    return errors
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
                        <Label text={`Код партнёра: ${params.get("id")}`}/>
                        <Label text={`Логин: ${params.get("login")}`}/>
                        <Label text={`Количество бонусов: ${params.get("points")}`}/>

                        <TextInput label={"Введите количество бонусов"} name="query"/>
                        <SubmitButton text={"Добавить"} isSubmitting={isSubmitting}/>
                    </PageContent>
                </Form>
            )}
        </Formik>
    </>
}