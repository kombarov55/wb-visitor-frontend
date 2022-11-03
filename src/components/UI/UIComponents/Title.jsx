import React from "react";

export default function (props) {
    const {text} = props


    return (
        <div style={{
            fontWeight: "bold",
            fontSize: "8vw",
            textAlign: "center"
        }}>
            {text}
        </div>
    );
}