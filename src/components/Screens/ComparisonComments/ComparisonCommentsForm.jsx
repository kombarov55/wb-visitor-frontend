import React from "react";
import {Form, Formik} from "formik";
import TextArea from "../../UI/Form/TextArea";
import SubmitButton from "../../UI/Form/SubmitButton";
import {Bars} from "react-loader-spinner";
import axios from "axios";
import Links from "../../../Util/Links";

export default ({afterSubmit}) => {
    return <>
        <Formik
            initialValues={{
                text: ""
            }}
            onSubmit={(values, {setSubmitting}) => {
                axios.post(Links.comparisonComments, values).then(() => {
                    setSubmitting(false)
                    afterSubmit()
                })
            }}
        >
            {({values, isSubmitting}) => (
                <Form>
                    <TextArea label={"Данные файла"} name={"text"}/>
                    {
                        !isSubmitting ?
                            <SubmitButton text={"Сохранить"}/> :
                            <Bars
                                height="30"
                                width="30"
                                radius="9"
                                color='black'
                                ariaLabel='three-dots-loading'
                                wrapperStyle
                                wrapperClass
                            />
                    }

                </Form>
            )}
        </Formik>
    </>
}