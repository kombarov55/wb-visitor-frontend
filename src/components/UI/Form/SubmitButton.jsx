import React from "react";
import Spinner from "../Icons/Spinner";
import {Bars} from "react-loader-spinner";

export default function ({text, isSubmitting, externalStyle = false}) {

    return (
        <button type="submit"
                disabled={isSubmitting}
                style={externalStyle ? extStyle : style}>
            {text}
        </button>
    )
}

const style = {
    padding: "1vmax 0",
    margin: "0.5vmax 0",
    width: "20%",
    textAlign: "center",
    background: "black",
    color: "white",
    fontWeight: "bold",
    fontSize: "1vmax",
    border: "1px solid black",
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
}

const extStyle = {
    "display": "inline-block",
    "padding": "6px 12px",
    "marginBottom": "0",
    "fontSize": "14px",
    "fontWeight": "normal",
    "lineHeight": "1.42857143",
    "textAlign": "center",
    "whiteSpace": "nowrap",
    "verticalAlign": "middle",
    "MsTouchAction": "manipulation",
    "touchAction": "manipulation",
    "cursor": "pointer",
    "WebkitUserSelect": "none",
    "MozUserSelect": "none",
    "MsUserSelect": "none",
    "userSelect": "none",
    "backgroundImage": "none",
    "border": "1px solid transparent",
    "borderRadius": "4px",
    width: "30vw",
    alignSelf: "center"
}