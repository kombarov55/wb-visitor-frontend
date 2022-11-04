import React from "react";

export default ({
                    text,
                    size = "small",
                    textAlign = "start",
                    color = "black",
                    fontWeight = "normal",
                    fontStyle = "normal",
                    fontSize
                }) => {

    if (fontSize != null) {
        switch (size) {
            case "medium":
                fontSize = "3vmin"
                break;
            case "small":
                fontSize = "1vmax"
                break;
            case "normal":
                fontSize = "4vmin"
                break;
            case "big":
                fontSize = "8vmin"
                break;
        }
    }
    return (
        <div style={{
            fontSize: fontSize,
            textAlign: textAlign,
            color: color,
            fontWeight: fontWeight,
            fontStyle: fontStyle
        }}>
            {text}
        </div>
    )
}