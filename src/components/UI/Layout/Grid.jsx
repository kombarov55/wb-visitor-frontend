import React from "react";

export default ({children}) => {
    return <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "3vmax",
        justifyContent: "space-evenly"
    }}>
        {children}
    </div>
}