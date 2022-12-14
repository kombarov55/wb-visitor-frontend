import React, {useEffect, useState} from "react";
import axios from "axios";
import {
    Button,
    Dialog,
    DialogTitle, IconButton,
    ListItem,
    ListItemText,
    Paper,
    Snackbar,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography
} from "@mui/material";
import {useFormik} from "formik";
import Links from "../../Util/Links";
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default ({}) => {
    const [data, setData] = useState([])

    const [dialogVisible, setDialogVisible] = useState(false)

    const [showSnackbar, setShowSnackbar] = useState(false)
    const [snackbarText, setSnackbarText] = useState("")

    function load() {
        axios.get(Links.getProxy(0, 1000)).then(rs => setData(rs.data))
    }

    useEffect(() => {
        load()
        setInterval(() => load(), 5000)
    }, [])

    function snackbar(s) {
        setShowSnackbar(true)
        setSnackbarText(s)
    }

    const formik = useFormik({
        initialValues: {
            ip: "",
            username: "",
            password: ""
        }, onSubmit: values => {
            axios.post(Links.proxy, values)
                .then(rs => {
                    load()
                    snackbar("Прокси добавлен")
                    setDialogVisible(false)
                })
        }
    })

    return <>
        <Paper sx={{width: "60%", p: 2}}>
            <Stack spacing={3}>
                <Stack spacing={2} direction={"row"}>
                    <Typography variant={"h4"}>Прокси</Typography>
                    <IconButton onClick={() => setDialogVisible(true)}>
                        <AddCircleIcon/>
                    </IconButton>
                </Stack>
                <TableContainer component={Paper}>
                    <Table sx={{width: 650}} size={"small"}>
                        <TableHead>
                            <TableRow>
                                <TableCell>id</TableCell>
                                <TableCell align={"right"}>IP</TableCell>
                                <TableCell align={"right"}>Логин</TableCell>
                                <TableCell align={"right"}>Пароль</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((v) => (
                                <TableRow
                                    key={v.id}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">{v.id}</TableCell>
                                    <TableCell align="right">{v.ip}</TableCell>
                                    <TableCell align="right">{v.username}</TableCell>
                                    <TableCell align="right">{v.password}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
        </Paper>

        <Dialog open={dialogVisible} onClose={() => setDialogVisible(false)}>
            <form onSubmit={formik.handleSubmit}>
                <DialogTitle>Добавление прокси</DialogTitle>
                <ListItem>
                    <TextField label={"IP"}
                               name={"ip"}
                               required
                               onChange={formik.handleChange}
                    />
                </ListItem>
                <ListItem>
                    <TextField label={"Логин"}
                               name={"username"}
                               required
                               onChange={formik.handleChange}
                    />
                </ListItem>
                <ListItem>
                    <TextField label={"Пароль"}
                               name={"password"}
                               required
                               onChange={formik.handleChange}
                    />
                </ListItem>
                <ListItem>
                    <Button type={"submit"} variant={"contained"}>
                        Сохранить
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