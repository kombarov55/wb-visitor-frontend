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
    TextareaAutosize
} from "@mui/material";
import {useFormik} from "formik";

export default ({afterSubmit}) => {
    const actionTypes = [
        "Проставить лайки",
        "Проставить дизлайки",
        "Просмотр",
        "Добавить в корзину",
        "Добавить и убрать из корзины",
        "Добавить в корзину и заказать",
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
            amount: 0,
            interval_days: null,
            interval_hours: null,
            interval_minutes: null,
            interval_seconds: null
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
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
                    <FormLabel>ID магазина</FormLabel>
                    <Input name={"article_select_value"}
                           value={formik.values.article_select_value}
                           onChange={formik.handleChange}/>
                </>
            case "Найти по поисковому запросу":
                return <>
                    <FormLabel>Что ввести в поисковую строку</FormLabel>
                    <Input name={"article_select_value"}
                           value={formik.values.article_select_value}
                           onChange={formik.handleChange}/>
                </>

        }
    }

    function setLikeParamsForm() {
        return <>
            <FormLabel>Имя комментатора (скопировать из комментария)</FormLabel>
            <Input name={"params.name"}
                   value={formik.values.params.name}
                   onChange={formik.handleChange}/>
            <FormLabel>Дата комментария (скопировать из комментария)</FormLabel>
            <Input name={"params.date"}
                   value={formik.values.params.date}
                   onChange={formik.handleChange}/>
            <FormLabel>Сколько лайков (не должно превышать количество номеров)</FormLabel>
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
            <FormLabel>Сколько комментариев (не должно превышать количество номеров)</FormLabel>
            <Input name={"amount"}
                   value={formik.values.amount}
                   onChange={formik.handleChange}/>
        </>
    }

    function paramsInput() {
        switch (formik.values.action_type) {
            case "Проставить лайки":
                return setLikeParamsForm()
            case "Проставить дизлайки":
                return setLikeParamsForm()
            case "Просмотр":
                return <></>
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
            <Label size={"medium"} text={"Добавить задания"} fontWeight={"bold"}/>
            <br/>


            <FormControl>
                <Label size={"medium"} text={"Из чего выбирать артикулы:"} fontWeight={"bold"}/>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="article_select_type"
                >
                    {articleSelectTypes.map(v =>
                        <FormControlLabel value={v} onChange={formik.handleChange} control={<Radio/>} label={v}/>
                    )}
                </RadioGroup>
            </FormControl>

            {selectValueInput(formik.values.article_select_type)}

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

            {paramsInput()}

            <FormLabel>Интервал между действиями для каждого артикула:</FormLabel>

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

            <Button color="primary" variant="contained" type="submit">
                Сохранить
            </Button>
            <br/>
        </ElevatedVertical>
    </form>
}