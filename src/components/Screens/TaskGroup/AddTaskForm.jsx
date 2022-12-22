import React from "react";
import ElevatedVertical from "../../UI/Layout/ElevatedVertical";
import Label from "../../UI/UIComponents/Label";
import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Input,
    Radio,
    RadioGroup,
    TextareaAutosize, Typography
} from "@mui/material";
import {useFormik} from "formik";
import Links from "../../../Util/Links";
import axios from "axios";

export default ({availableNumbersAmount, afterSubmit}) => {
    const actionTypes = [
        "Проставить лайки к комменту",
        "Проставить дизлайки к комменту",
        // "Просмотр",
        "Добавить в корзину",
        "Добавить и убрать из корзины",
        "Добавить в избранное",
        "Добавить и убрать из избранного",
        "Задать вопрос",
        "Задать вопрос со сравнением"
    ]

    const articleSelectTypes = [
        "Список артикулов через 'ENTER'",
        "Найти по магазину",
        "Найти по поисковому запросу"
    ]

    const formik = useFormik({
        initialValues: {
            article_select_type: null,
            article_select_value: "",
            action_type: null,
            params: {},
            amount: 1,
            interval_days: 0,
            interval_hours: 0,
            interval_minutes: 1,
            interval_seconds: 0
        },
        onSubmit: values => {
            if (values.action_type === "Проставить лайки к комменту" || values.action_type === "Проставить дизлайки к комменту") {
                values.article_select_type = articleSelectTypes[0]
            }

            // alert(JSON.stringify(values, null, 2))
            axios.post(Links.taskRequest, values).then(rs => afterSubmit())
        }
    })

    function selectValueInput(articleSelectType) {
        switch (articleSelectType) {
            case articleSelectTypes[0]:
                return <>
                    <FormLabel>Список артикулов:</FormLabel>
                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Например:
15923663
111864107
115119681
..."
                        minRows={10}
                        name={"article_select_value"}
                        value={formik.values.article_select_value}
                        onChange={formik.handleChange}
                    />
                </>
            case "Найти по магазину":
                return <>
                    <FormLabel>ID магазина (Будут выбраны артикулы с 1ой страницы товаров магазина)</FormLabel>
                    <Input name={"article_select_value"}
                           value={formik.values.article_select_value}
                           onChange={formik.handleChange}/>
                </>
            case "Найти по поисковому запросу":
                return <>
                    <FormLabel>Что ввести в поисковую строку (Будут выбраны артикулы с 1ой страницы поискового запроса)</FormLabel>
                    <Input name={"article_select_value"}
                           value={formik.values.article_select_value}
                           onChange={formik.handleChange}/>
                </>

        }
    }

    function setLikeParamsForm() {
        return <>
            <FormLabel>Артикул</FormLabel>
            <Input name={"article_select_value"}
                   value={formik.values.article_select_value}
                   onChange={formik.handleChange}/>

            <FormLabel>Имя комментатора (скопировать из комментария)</FormLabel>
            <Input name={"params.name"}
                   value={formik.values.params.name}
                   onChange={formik.handleChange}/>
            <FormLabel>Текст (скопировать)</FormLabel>
            <Input name={"params.text"}
                   value={formik.values.params.date}
                   onChange={formik.handleChange}/>
            <FormLabel>Сколько лайков - не должно превышать количество номеров ({availableNumbersAmount})</FormLabel>
            <Input name={"amount"}
                   value={formik.values.amount}
                   onChange={formik.handleChange}/>
        </>
    }

    function addQuestionParamsForm() {
        return <>
            <FormLabel>Тексты комментариев (разделённые через 'ENTER')</FormLabel>
            <TextareaAutosize
                minRows={10}
                name={"params.text_list"}
                value={formik.values.text_list}
                onChange={formik.handleChange}
            />
            <FormLabel>Сколько комментариев - не должно превышать количество номеров ({availableNumbersAmount})</FormLabel>
            <Input name={"amount"}
                   value={formik.values.amount}
                   onChange={formik.handleChange}/>
        </>
    }

    function addToCartForm() {
        return <></>
    }

    function addToCartAndRemoveForm() {
        return <>
            <FormLabel>Через сколько убрать:</FormLabel>
            <FormLabel>Дней:</FormLabel>
            <Input name={"params.remove_interval_days"}
                   value={formik.values.params.remove_interval_days}
                   onChange={formik.handleChange}/>

            <FormLabel>Часов:</FormLabel>
            <Input name={"params.remove_interval_hours"}
                   value={formik.values.params.remove_interval_hours}
                   onChange={formik.handleChange}/>

            <FormLabel>Минут:</FormLabel>
            <Input name={"params.remove_interval_minutes"}
                   value={formik.values.params.remove_interval_minutes}
                   onChange={formik.handleChange}/>

            <FormLabel>Секунд:</FormLabel>
            <Input name={"params.remove_interval_seconds"}
                   value={formik.values.params.remove_interval_seconds}
                   onChange={formik.handleChange}/>
        </>
    }

    function addToFavoritesForm() {
        return <>

        </>
    }

    function addToFavoritesAndRemoveForm() {
        return <>
            <FormLabel>Через сколько убрать:</FormLabel>
            <FormLabel>Дней:</FormLabel>
            <Input name={"params.remove_interval_days"}
                   value={formik.values.params.remove_interval_days}
                   onChange={formik.handleChange}/>

            <FormLabel>Часов:</FormLabel>
            <Input name={"params.remove_interval_hours"}
                   value={formik.values.params.remove_interval_hours}
                   onChange={formik.handleChange}/>

            <FormLabel>Минут:</FormLabel>
            <Input name={"params.remove_interval_minutes"}
                   value={formik.values.params.remove_interval_minutes}
                   onChange={formik.handleChange}/>

            <FormLabel>Секунд:</FormLabel>
            <Input name={"params.remove_interval_seconds"}
                   value={formik.values.params.remove_interval_seconds}
                   onChange={formik.handleChange}/>
        </>
    }

    function paramsInput() {
        switch (formik.values.action_type) {
            case "Проставить лайки к комменту":
                return setLikeParamsForm()
            case "Проставить дизлайки к комменту":
                return setLikeParamsForm()
            case "Добавить в корзину":
                return addToCartForm()
            case "Добавить и убрать из корзины":
                return addToCartAndRemoveForm()
            case "Добавить в избранное":
                return addToFavoritesForm()
            case "Добавить и убрать из избранного":
                return addToFavoritesAndRemoveForm()
            case "Задать вопрос":
                return addQuestionParamsForm()
            case "Задать вопрос со сравнением":
                return addQuestionParamsForm()
            case null:
                return <></>
            default:
                return <h7>not imlemented</h7>
        }
    }

    return <form onSubmit={formik.handleSubmit}>
        <ElevatedVertical width={"60%"} margin={"0"}>
            <Label size={"medium"} text={"Новое задание"} fontWeight={"bold"}/>
            <br/>

            <FormControl>
                <FormLabel>Действие</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="action_type"
                >
                    {actionTypes.map(v =>
                        <FormControlLabel value={v} onChange={formik.handleChange} control={<Radio/>} label={v}/>
                    )}
                </RadioGroup>
            </FormControl>
            {(formik.values.action_type != null && formik.values.action_type != "Проставить лайки к комменту" && formik.values.action_type != "Проставить дизлайки к комменту") &&
                <>
                    <FormControl>
                        <Label size={"medium"} text={"Из чего выбирать артикулы:"} fontWeight={"bold"}/>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="article_select_type"
                        >
                            {articleSelectTypes.map(v =>
                                <FormControlLabel value={v} onChange={formik.handleChange} control={<Radio/>}
                                                  label={v}/>
                            )}
                        </RadioGroup>
                    </FormControl>
                    {selectValueInput(formik.values.article_select_type)}
                </>
            }


            {paramsInput()}

            {formik.values.action_type &&
                <>
                    <FormLabel>Интервал между действиями:</FormLabel>

                    <FormLabel>Дней:</FormLabel>
                    <Input name={"interval_days"}
                           value={formik.values.interval_days}
                           onChange={formik.handleChange}/>

                    <FormLabel>Часов:</FormLabel>
                    <Input name={"interval_hours"}
                           value={formik.values.interval_hours}
                           onChange={formik.handleChange}/>

                    <FormLabel>Минут:</FormLabel>
                    <Input name={"interval_minutes"}
                           value={formik.values.interval_minutes}
                           onChange={formik.handleChange}/>

                    <FormLabel>Секунд:</FormLabel>
                    <Input name={"interval_seconds"}
                           value={formik.values.interval_seconds}
                           onChange={formik.handleChange}/>
                </>
            }


            <Button color="primary" variant="contained" type="submit">
                Сохранить
            </Button>
            <br/>
        </ElevatedVertical>
    </form>
}