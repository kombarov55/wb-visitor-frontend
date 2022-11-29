import React from "react";
import {TextField} from "@material-ui/core";

export default ({formik, label, fieldName}) => {
    return <TextField
        label={label}
        id={fieldName}
        name={fieldName}
        value={formik.values[fieldName]}
        onChange={formik.handleChange}
    />
}