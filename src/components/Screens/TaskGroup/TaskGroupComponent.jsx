import React, {useEffect, useState} from "react"
import Label from "../../UI/UIComponents/Label";
import axios from "axios";
import Links from "../../../Util/Links";
import AddTaskForm from "./AddTaskForm";
import FormatDate from "../../../Util/FormatDate";
import TaskRequest from "../../../Stubs/TaskRequest"

import {
    Button, CircularProgress,
    Dialog,
    DialogTitle,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";

import  Pagination from "@mui/material/Pagination";


export default ({}) => {

    const [data, setData] = useState([])
    const [selectedTask, setSelectedTask] = useState({})
    const [availableNumbersAmount, setAvailableNumbersAmount] = useState(0)

    const [isOpenDialog, setIsOpenDialog] = useState(false)

    const [tasks, setTasks] = useState([])
    const [isLoadingTasks, setIsLoadingTasks] = useState(false)

    const [page, setPage] = useState(1)

    useEffect(() => {
        load()
        setInterval(() => load(), 5000)
    }, [])

    const [isFormVisible, setIsFormVisible] = useState(false)

    function load() {
        axios.get(Links.taskRequest).then(rs => setData(rs.data))
        axios.get(Links.availableNumbers).then(rs => setAvailableNumbersAmount(rs.data.amount))
    }

    function interval(v) {
        let result = []
        if (v.interval_days != 0) {
            result.push(`${v.interval_days} д.`)
        }
        if (v.interval_hours != 0) {
            result.push(`${v.interval_hours} ч.`)
        }
        if (v.interval_minutes != 0) {
            result.push(`${v.interval_minutes} мин.`)
        }
        if (v.interval_seconds != 0) {
            result.push(`${v.interval_seconds} сек.`)
        }

        return result.join(" ")
    }

    function openDialogAndLoadTasks(task) {
        setIsOpenDialog(true)
        setIsLoadingTasks(true)
        setSelectedTask(task)
        axios.get(Links.tasks(task.id)).then(rs => {
            setIsLoadingTasks(false)
            setTasks(rs.data)
        })
    }

    function taskStatus(s) {
        switch (s) {
            case "SCHEDULED":
                return "Запланировано"
            case "RUNNING":
                return "Выполняется"
            case "NO_AVAILABLE_NUMBERS":
                return "Нет доступных номеров для выполнения"
            case "SUCCESS":
                return "Выполнено"
            case "FAILED":
                return "Ошибка во время выполнения"
        }
    }

    function describeTaskGroup(v) {
        if (Object.keys(v).length == 0) return ""

        var result = ""

        const articles = v.article_select_value.size > 3
              ? "[" + v.article_select_value.slice(0, 3).join(", ") + "...]"
              : "[" + v.article_select_value + "]"

        result += v.action_type + ` к артикул(ам) ${articles}`

        return result
    }

    function countTaskGroupProgress(v) {
        const total = v.total_cnt
        const executedCount = total - v.scheduled_cnt
        
        return `${executedCount}/${total}`
    }

    return <>
        <Paper sx={{width: "80%", p: 2}}>
            <Label text={"Активные задания"} size={"medium"}/>
            <TableContainer component={Paper}>
                <Table sx={{}}>
                    <TableHead>
                        <TableRow>
                            <TableCell align={"left"}>Действие</TableCell>
                            <TableCell align={"right"}>Прогресс</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                      { data.slice((page - 1) * 10, ((page - 1) * 10) + 10).map((v) => (
                            <TableRow key={v.id}
                                      sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                      onClick={() => openDialogAndLoadTasks(v)}>
                              <TableCell align="left">{describeTaskGroup(v)}</TableCell>
                              <TableCell align="right">{countTaskGroupProgress(v)}</TableCell>
                            </TableRow>
                        )) }
                    </TableBody>
                </Table>
              <Pagination count={Math.floor(data.length / 10) + 1} onChange={ (event, value) => { setPage(value) } }/>
            </TableContainer>
            <br/>
            {
                !isFormVisible ?
                    <Button variant={"contained"} onClick={() => setIsFormVisible(true)}>Добавить</Button> :
                    <AddTaskForm availableNumbersAmount={availableNumbersAmount} afterSubmit={() => {
                        load()
                        setIsFormVisible(false)
                    }}/>
                // <AddTaskGroupForm afterSubmit={() => {
                //     loadTaskGroups()
                //     setIsFormVisible(false)
                // }}/>
            }
        </Paper>

        <Dialog open={isOpenDialog} onClose={() => setIsOpenDialog(false)} maxWidth={"80vw"}>
            {!isLoadingTasks ?
                <>
                  <DialogTitle>{ describeTaskGroup(selectedTask) }</DialogTitle>
                  <Paper>
                    <ul>
                      <li>Артикул(ы): <b> {selectedTask.article_select_value} </b> </li>
                      <li>Статус: <b> {selectedTask.status} </b></li>
                      <li>Начало работы: <b> {selectedTask.received_datetime} </b> </li>
                      { selectedTask.end_datetime && <li>Рассчетное время окончания: <b> {selectedTask.end_datetime} </b> </li> }
                      <li>Количество действий для каждого артикула: <b> {selectedTask.amount} </b> </li>
                      <li>Интервал между действиями: <b> {selectedTask.interval_days} </b> дней <b> {selectedTask.interval_hours} </b> часов <b> {selectedTask.interval_minutes} </b> минут <b> {selectedTask.seconds} </b> секунд</li>
                      <li>Всего действий: <b> {selectedTask.total_cnt} </b> </li>
                      <li>Успешно выполнено: <b> {selectedTask.success_cnt} </b> </li>
                      <li>Запущенно в данный момент: <b> {selectedTask.running_cnt} </b> </li>
                      <li>Запланированы: <b> {selectedTask.scheduled_cnt} </b> </li>
                      <li>Выполнено с ошибкой: <b> {selectedTask.no_available_numbers_cnt} </b> </li>
                    </ul>
                  </Paper>
                    <TableContainer component={Paper}>
                        <Table sx={{}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>id</TableCell>
                                    <TableCell align={"right"}>Артикул</TableCell>
                                    <TableCell align={"right"}>Действие</TableCell>
                                    <TableCell align={"right"}>Использован номер</TableCell>
                                    <TableCell align={"right"}>Запланированная дата выполнения</TableCell>
                                    <TableCell align={"right"}>Дата выполнения</TableCell>
                                    <TableCell align={"right"}>Статус</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tasks.map(v =>
                                    <TableRow key={v.id}
                                              sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                        <TableCell component="th" scope="row">{v.id}</TableCell>
                                        <TableCell align="right">
                                            <a href={`https://www.wildberries.ru/catalog/${v.article}/detail.aspx?targetUrl=MI`}>
                                                {v.article}
                                            </a>

                                        </TableCell>
                                        <TableCell align="right">{v.action_type}</TableCell>
                                        <TableCell align="right">{v.number_used}</TableCell>
                                        <TableCell align="right">{v.scheduled_datetime}</TableCell>
                                        <TableCell align="right">{v.end_datetime}</TableCell>
                                        <TableCell align="right">{taskStatus(v.status)}</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </> :
                <>
                    <DialogTitle>
                        <CircularProgress/>
                    </DialogTitle>
                </>
            }
        </Dialog>
    </>
}
