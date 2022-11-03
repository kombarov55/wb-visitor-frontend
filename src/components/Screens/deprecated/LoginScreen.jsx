import React, {useRef} from "react"
import Title from "../UI/UIComponents/Title";
import TextInput from "../UI/Form/TextInput";
import {useNavigate} from "react-router-dom";
import PageContent from "../UI/Layout/PageContent";
import {Form, Formik} from "formik";
import SubmitButton from "../UI/Form/SubmitButton";
import axios from "axios";
import Links from "../../Util/Links";
import {Toast} from "primereact/toast";

export default function (props) {
    const navigate = useNavigate()
    const toast = useRef()

    return (
        <Formik initialValues={{login: "", pwd: ""}}
                onSubmit={(values, {setSubmitting}) => {
                    axios.post(Links.login, values)
                        .then(rs => {
                            setSubmitting(false)

                            if (rs.data.found) {
                                window.localStorage.setItem("login_data", JSON.stringify(rs.data))
                                switch (rs.data.role) {
                                    case "MANAGER":
                                        navigate("/manager_home")
                                        break;
                                    case "PARTNER":
                                        navigate("/partner_profile")
                                        break;
                                    case "CLIENT":
                                        navigate("/client_profile")
                                        break;
                                }

                            } else {
                                alert("Неправильный логин/пароль")
                            }
                        })
                }}
        >
            {({isSubmitting}) => (
                <Form>
                    <Toast ref={toast}/>
                    <PageContent alignItems={"stretch"}>
                        <Toast ref={toast}/>
                        <Title text={"Авторизация"}/>
                        <TextInput label={"Логин:"} name={"login"}/>
                        <TextInput label={"Пароль:"} type="password" name={"pwd"}/>
                        <SubmitButton text={"Вход"} isSubmitting={isSubmitting}/>
                    </PageContent>
                </Form>
            )}
        </Formik>
    )
}