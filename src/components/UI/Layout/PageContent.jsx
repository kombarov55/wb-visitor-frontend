import React from "react";

export default ({children, justifyContent="center", alignItems="center"}) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "2vh",
            alignItems: alignItems,
            justifyContent: justifyContent,

            width: "80vw",
            height: "90vh",

            marginLeft: "10vw",
            marginTop: "5vh"
        }}>
            {children}
        </div>
    )
}