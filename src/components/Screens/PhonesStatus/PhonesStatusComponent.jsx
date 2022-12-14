import React, {useEffect, useState} from "react";
import Label from "../../UI/UIComponents/Label";
import axios from "axios";
import Links from "../../../Util/Links";
import {
    Button,
    Dialog,
    DialogTitle,
    ListItem,
    ListItemText,
    Paper, Snackbar,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, TextField,
    Typography
} from "@mui/material";
import {useFormik} from "formik";
import TextInput from "../../UI/Form/TextInput";

export default ({}) => {
    const [data, setData] = useState([])
    const [balance, setBalance] = useState(0)

    const [dialogVisible, setDialogVisible] = useState(false)

    const [showSnackbar, setShowSnackbar] = useState(false)
    const [snackbarText, setSnackbarText] = useState("")


    const formik = useFormik({
        initialValues: {
            amount: 1
        }, onSubmit: values => {
            axios.post(Links.requestPhone, values)
                .then(() => {
                    setDialogVisible(false)
                    snackbar(`Куплено ${values.amount} номеров`)
                    load()
                })
        }
    })

    function load() {
        axios.get(Links.phones).then(rs => setData(rs.data))
        axios.get(Links.phones_data).then(rs => setBalance(rs.data.balance))
    }

    useEffect(() => {
        load()
        setInterval(() => load(), 5000)
    }, [])

    function statusToRu(s) {
        switch (s) {
            case "JUST_RECEIVED":
                return "Только получили"
            case "ACTIVATING":
                return "Активируем"
            case "ACTIVATED":
                return "Активирован"
            case "BLOCKED":
                return "Заблокирован"
        }
    }

    function snackbar(s) {
        setShowSnackbar(true)
        setSnackbarText(s)
    }

    return <>
        <Paper sx={{width: "60%", p: 2}}>
            <Stack spacing={3}>
                <Label text={"Статус номеров"} size={"medium"}/>
                <Paper sx={{p: 2}}>
                    <Stack spacing={2}>
                        <Typography gutterBottom variant="h5" component="div">
                            Баланс: {balance}Р
                        </Typography>
                        <Button variant={"contained"} onClick={() => setDialogVisible(true)}>Заказать номер</Button>
                    </Stack>
                </Paper>
                <TableContainer component={Paper}>
                    <Table sx={{width: 650}}>
                        <TableHead>
                            <TableRow>
                                <TableCell>id</TableCell>
                                <TableCell align={"right"}>id sms-activate</TableCell>
                                <TableCell align={"right"}>Номер</TableCell>
                                <TableCell align={"right"}>Статус</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((v) => (
                                <TableRow
                                    key={v.id}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">{v.id}</TableCell>
                                    <TableCell align="right">{v.ext_id}</TableCell>
                                    <TableCell align="right">{v.number}</TableCell>
                                    <TableCell align="right">{statusToRu(v.status)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
        </Paper>

        <Dialog open={dialogVisible} onClose={() => setDialogVisible(false)}>
            <form onSubmit={formik.handleSubmit}>
                <DialogTitle>Заказать новый номер?</DialogTitle>
                <ListItem>
                    <ListItemText>Текущий баланс: {balance}Р</ListItemText>
                </ListItem>
                <ListItem>
                    <TextField label={"Сколько номеров?"}
                               name={"amount"}
                               onChange={formik.handleChange}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText>Будет списано {10 * formik.values.amount}Р</ListItemText>
                </ListItem>
                <ListItem>
                    <Button type={"submit"} variant={"contained"}>
                        Заказать
                    </Button>
                </ListItem>
            </form>
        </Dialog>
        <Snackbar open={showSnackbar}
                  message={snackbarText}
                  autoHideDuration={2000}
                  onClose={() => setShowSnackbar(false)}
        />
    </>
}