import React from "react";
import {ErrorMessage, Field} from "formik";
import Horizontal from "../Layout/Horizontal";

export default ({label = "", name}) => {
    return <Horizontal justifyContent={""}>
        <label style={{fontSize: "1vmax"}}>{label}</label>
        <Field component={"textarea"} rows="10" name={name} style={{"width": "30vw"}} />
        <ErrorMessage name={name} component={"span"} className={"errorMsg"}/>
    </Horizontal>
}