import React from "react";
import {Field} from "formik";
import Vertical from "../Layout/Vertical";

export default ({xs, name}) => {
    return <>
        <div role="group" aria-labelledby="my-radio-group">
            <Vertical width={"98%"} margin={"0"} alignItems={"flex-start"}>
                {
                    xs.map(v => <>
                        <label style={{"font-size": "1vmax"}}>
                            <Field type="radio" name={name} value={v}/>
                            {v}
                        </label>
                    </>)
                }
            </Vertical>
        </div>
    </>
}