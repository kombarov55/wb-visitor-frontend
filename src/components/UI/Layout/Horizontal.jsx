import React from "react";

export default function ({
                             children,
                             justifyContent = "space-around",
                             alignItems = "",
                             width = "100%",
                             height,
                             padding = "",
                             gap = "1vmax"
                         }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: alignItems,
            justifyContent: justifyContent,
            width: width,
            padding: padding,
            gap: gap,
            height: height
        }}>
            {children}
        </div>
    )
}