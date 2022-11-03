import React from "react"
import ElevatedVertical from "../../UI/Layout/ElevatedVertical";
import {Field, Form, Formik} from "formik";
import Label from "../../UI/UIComponents/Label";
import TextInput from "../../UI/Form/TextInput";
import Textarea from "../../UI/Form/TextArea";
import SubmitButton from "../../UI/Form/SubmitButton";
import Horizontal from "../../UI/Layout/Horizontal";
import {Bars} from "react-loader-spinner"
import Vertical from "../../UI/Layout/Vertical";

export default ({afterSubmit}) => {
    const types = [
        "Проставить лайки",
        "Просмотр",
        "Добавить в корзину",
        "Добавить и убрать из корзины",
        "Добавить в корзину и заказать",
        "Комментарий",
        "Комментарий с сравнением"
    ]

    return <>
        <Formik
            initialValues={{
                type: types[0],
                articles: "",
                amount: 10,
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            }}
            onSubmit={(values, {setSubmitting}) => {
                window.setTimeout(() => {
                    setSubmitting(false)
                    afterSubmit()
                }, 3000)
            }}
            validate={values => {
                const errors = {}

                if (!values.articles) {
                    errors["articles"] = "Обязательное поле"
                }

                if (!values.amount) {
                    errors["articles"] = "Обязательное поле"
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
                        <Label size={"medium"} text={"Добавление новой группы"} fontWeight={"bold"}/>
                        <br/>

                        <Label text={"Тип группы: "}/>
                        <div role="group" aria-labelledby="my-radio-group">
                            <Vertical width={"98%"} margin={"0"} alignItems={"flex-start"}>
                                {
                                    types.map(v => <>
                                        <label style={{"font-size": "1vmax"}}>
                                            <Field type="radio" name="type" value={v}/>
                                            {v}
                                        </label>
                                    </>)
                                }
                            </Vertical>
                        </div>
                        <br/>

                        <Textarea label={"Артикулы: "} name={"articles"}/>
                        <TextInput label={"Количество: "} name={"amount"} width={"10vmax"}/>
                        <Label text={"Интервал между лайками для каждого артикула:"}/>
                        <Horizontal width={"80%"} justifyContent={"flex-start"}>
                            <TextInput label={"Дней: "} name={"days"}/>
                            <TextInput label={"Часов: "} name={"hours"}/>
                            <TextInput label={"Минут: "} name={"minutes"}/>
                            <TextInput label={"Секунд: "} name={"seconds"}/>
                        </Horizontal>
                        {
                            !isSubmitting ?
                                <SubmitButton isSubmitting={isSubmitting} text={"Сохранить"}/> :
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