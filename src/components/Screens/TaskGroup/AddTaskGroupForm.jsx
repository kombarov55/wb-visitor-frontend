import React from "react"
import ElevatedVertical from "../../UI/Layout/ElevatedVertical";
import {Form, Formik} from "formik";
import Label from "../../UI/UIComponents/Label";
import TextInput from "../../UI/Form/TextInput";
import Textarea from "../../UI/Form/TextArea";
import SubmitButton from "../../UI/Form/SubmitButton";
import Horizontal from "../../UI/Layout/Horizontal";
import {Bars} from "react-loader-spinner"
import RadioInput from "../../UI/Form/RadioInput";
import axios from "axios";
import Links from "../../../Util/Links";

export default ({afterSubmit}) => {
    const types = [
        "Пожаловаться на отзыв",
        "Просмотр",
        "Добавить в корзину",
        "Добавить и убрать из корзины",
        "Добавить в корзину и заказать",
        "Задать вопрос",
        "Задать вопрос со сравнением с другим товаром."
    ]

    const targets = [
        "По артикулу",
        "По бренду",
        "По магазину"
    ]

    function targetValuesInput(target) {
        switch (target) {
            case targets[0]:
                return <Textarea label={"Артикулы: "} name={"target_value"}/>
            case targets[1]:
                return <TextInput label={"Название бренда:"} name={"target_value"} width={"50%"}/>
            case targets[2]:
                return <TextInput label={"id магазина"} name={"target_value"} width={"50%"}/>
        }
    }

    return <>
        <Formik
            initialValues={{
                task_type: types[0],
                target_type: targets[0],
                target_value: "",
                amount: 10,
                days: 0,
                hours: 0,
                minutes: 1,
                seconds: 0
            }}
            onSubmit={(values, {setSubmitting}) => {
                axios.post(Links.taskGroup, values)
                    .then(rs => {
                        setSubmitting(false)
                        afterSubmit()
                        console.log(rs)
                    })
            }}
            validate={values => {
                const errors = {}

                if (!values.target_value) {
                    errors["target_value"] = "Обязательное поле"
                }

                if (!values.amount) {
                    errors["target_value"] = "Обязательное поле"
                }

                if (values.days < 0) {
                    errors["days"] = "Количество дней не может быть меньше 0."
                }

                if (values.hours < 0 || values.hours > 23) {
                    errors["hours"] = "Неверное количество часов. "
                }

                if (values.minutes < 0 || values.minutes > 59) {
                    errors["hours"] = "Неправильное количество минут. "
                }

                if (values.seconds < 0 || values.seconds > 59) {
                    errors["hours"] = "Неправильное количество секунд. "
                }

                return errors
            }}>
            {({values, isSubmitting}) => (
                <Form>
                    <ElevatedVertical width={"98%"} margin={"0"}>
                        <Label size={"medium"} text={"Добавить задания"} fontWeight={"bold"}/>
                        <br/>

                        <Label text={"Задание: "}/>
                        <RadioInput xs={types} name={"task_type"}/>
                        <br/>

                        <Label text={"Выбирать товары по: "}/>
                        <RadioInput xs={targets} name={"target_type"}/>
                        <br/>

                        {targetValuesInput(values["target_type"])}

                        <TextInput label={"Количество: "} name={"amount"} width={"10vmax"}/>
                        <Label text={"Интервал между жалобами:"}/>
                        <Horizontal width={"80%"} justifyContent={"flex-start"}>
                            <TextInput label={"Дней: "} name={"days"}/>
                            <TextInput label={"Часов: "} name={"hours"}/>
                            <TextInput label={"Минут: "} name={"minutes"}/>
                            <TextInput label={"Секунд: "} name={"seconds"}/>
                        </Horizontal>
                        {
                            !isSubmitting ?
                                <SubmitButton isSubmitting={isSubmitting} text={"Запуск"}/> :
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

                    </ElevatedVertical>
                </Form>
            )}
        </Formik>
    </>
}
