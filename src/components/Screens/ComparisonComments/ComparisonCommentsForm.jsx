import React from "react";
import {Form, Formik} from "formik";
import TextArea from "../../UI/Form/TextArea";
import SubmitButton from "../../UI/Form/SubmitButton";
import {Bars} from "react-loader-spinner";

export default ({afterSubmit}) => {
    return <>
        <Formik
            initialValues={{
                text: ""
            }}
            onSubmit={(values, {setSubmitting}) => {
                setSubmitting(false)
                afterSubmit()
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