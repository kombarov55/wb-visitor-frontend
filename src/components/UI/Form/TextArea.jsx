import React from "react";
import {ErrorMessage, Field} from "formik";
import Horizontal from "../Layout/Horizontal";
import Vertical from "../Layout/Vertical";

export default ({label = "", name}) => {
    return <Vertical alignItems={"flex-start"}>
        <Horizontal justifyContent={""}>
            <label style={{fontSize: "1vmax"}}>{label}</label>
            <Field component={"textarea"} rows="10" name={name} style={{"width": "30vw"}}/>
        </Horizontal>
        <ErrorMessage name={name} component={"span"} className={"errorMsg"}/>
    </Vertical>
}