import React from "react";
import WithFooterAndHeader from "../UI/Page/WithFooterAndHeader";
import TextInput from "../UI/Form/TextInput";
import Title from "../UI/UIComponents/Title";

import {Form, Formik} from "formik";
import axios from 'axios';
import Links from "../../Util/Links";
import {useNavigate} from "react-router-dom";
import PageContent from "../UI/Layout/PageContent";
import SubmitButton from "../UI/Form/SubmitButton";
import Button from "../UI/UIComponents/Button";


export default function (props) {
    const navigate = useNavigate();

    return (
        <WithFooterAndHeader>
            <Formik initialValues={{login: "", pwd: "", confirmPwd: ""}}
                    onSubmit={(values, {setSubmitting}) => {
                        // alert(JSON.stringify(values, null, 2))
                        axios.post(Links.addPartner, values)
                            .then(rs => {
                                console.log(rs.data)
                                const data = rs.data
                                navigate(`/partner_created?id=${data.id}&register_link=${data.registerLink}&login=${data.login}`)
                            })
                        setSubmitting(false)
                    }}
                    validate={values => {
                        const errors = {};

                        if (!values.login) {
                            errors.login = "Обязательное поле"
                        }

                        if (!values.pwd) {
                            errors.pwd = "Обязательное поле"
                        }

                        if (values.pwd !== values.confirmPwd) {
                            errors.confirmPwd = "Пароли не совпадают"
                        }
                        return errors
                    }}
            >
                {({isSubmitting, dirty, handleReset}) => (
                    <Form>
                        <PageContent justifyContent={"flex-start"}
                                     alignItems={"stretch"}
                        >
                            <Title text={"Добавить партнёра"}/>

                            <TextInput label="Логин:" name={"login"}/>
                            <TextInput label="Пароль" name={"pwd"} type={"password"}/>
                            <TextInput label="Ещё раз пароль:" name={"confirmPwd"} type={"password"}/>

                            <SubmitButton text={"Сохранить"} isSubmitting={isSubmitting}/>
                            <Button text={"Назад"} onClick={() => navigate(-1)}/>

                        </PageContent>
                    </Form>
                )}
            </Formik>
        </WithFooterAndHeader>
    )
}