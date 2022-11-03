import React from "react";
import Vertical from "./Vertical";

export default ({children, noItemsText = "Нет данных"}) => {
    return (
        <Vertical>
            {children == null || children.length === 0 ?
                <div style={{fontStyle: "italic"}}>{noItemsText}</div> :
                children
            }
        </Vertical>
    )
}