import React from "react";
import {ErrorMessage, Field} from "formik";
import Horizontal from "../Layout/Horizontal";
import Vertical from "../Layout/Vertical";

export default
function ({label, name, type="text", width = "10vmax"}) {
    return (
        <Vertical alignItems={"flex-start"}>
            <Horizontal justifyContent={""} width={width}>
                <label style={{fontSize: "1.vmax"}}>{label}</label>
                <Field type={type} name={name} style={{height: "2vmin", width: width}}/>
            </Horizontal>
            <ErrorMessage name={name} component={"span"} className={"errorMsg"}/>
        </Vertical>
    )
}