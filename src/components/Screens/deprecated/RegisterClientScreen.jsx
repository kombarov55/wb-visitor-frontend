import React, {useEffect, useState} from "react";
import {Form, Formik} from "formik";
import TextInput from "../UI/Form/TextInput";
import Vertical from "../UI/Layout/Vertical";
import Label from "../UI/UIComponents/Label";
import axios from "axios";
import Links from "../../Util/Links";
import {useNavigate, useSearchParams} from "react-router-dom";
import IsValidPhone from "../../Util/IsValidPhone";
import IsValidIndex from "../../Util/IsValidIndex";
import PageContent from "../UI/Layout/PageContent";
import SubmitButton from "../UI/Form/SubmitButton";

export default function ({}) {
    const [countries, setCountries] = useState([])
    const [params] = useSearchParams()
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(Links.countries)
            .then(rs => setCountries(rs.data))
    }, [])

    return (
        <Formik initialValues={{
            phone: "",
            fio: "",
            address: "",
            region: "",
            postIndex: "",
            email: "",
            country: "Россия"
        }} onSubmit={(values, {setSubmitting}) => {
            values.partnerId = params.get("partnerid")
            axios.post(Links.addClient, values)
                .then(rs => {
                    navigate(`/client_created?phone=${rs.data.phone}`)

                    setSubmitting(false)
                })
        }}
                validate={values => {
                    const errors = {}

                    for (let key of Object.keys(values)) {
                        if (values.hasOwnProperty(key) && values[key] == "") {
                            errors[key] = "Обязательное поле"
                        }
                    }

                    if (!IsValidPhone(values.phone)) {
                        errors.phone = "Неверно введён номер телефона. Укажите без кода страны."
                    }

                    if (!IsValidIndex(values.postIndex)) {
                        errors.postIndex = "Неверно указан индекс. Должно быть 6 цифр."
                    }

                    return errors
                }}>
            {({isSubmitting}) => (
                <PageContent justifyContent={"flex-start"}>
                    <Form>
                        <Label text={"Новый пользователь"} size={"big"} textAlign={"center"}/>
                        <br/>
                        <Vertical alignItems={"stretch"} width={"80vw"}>
                            <TextInput label={"Номер телефона (без кода страны):*"} name="phone"/>
                            <TextInput label={"Имя, Фамилия:*"} name="fio"/>
                            <TextInput label={"Адрес (Улица, номер дома, номер квартиры):*"} name="address"/>
                            <TextInput label={"Область:*"} name={"region"}/>
                            <TextInput label={"Индекс:*"} name="postIndex"/>
                            <TextInput label={"Email:*"} name="email" type={"email"}/>

                            <SubmitButton text={"ОТПРАВИТЬ"} externalStyle={true} isSubmitting={isSubmitting}/>
                        </Vertical>
                    </Form>
                </PageContent>
            )}
        </Formik>
    )
}