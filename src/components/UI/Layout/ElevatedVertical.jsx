import React from "react";
import Vertical from "./Vertical";

export default ({children, gap, margin = "1vmax 10vmax", width = "90%"}) => {
    return <Vertical margin={margin}
                     padding={"1vmax"}
                     alignItems={"stretch"}
                     boxShadowEnabled={true}
                     width={width}
                     gap={gap}>
        {children}
    </Vertical>
}