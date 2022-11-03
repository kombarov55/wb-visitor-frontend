import React from "react";

export default ({src, size = "medium"}) => {
    let sideLength;

    switch (size) {
        case "medium":
            sideLength = "5vmax"
            break;
        case "small":
            sideLength = "2vmax"
            break;
        case "normal":
            sideLength = "3vmax"
            break;
        case "big":
            sideLength = "10vmax"
            break;

    }

    return <img src={src} style={{
        width: sideLength,
        height: sideLength
    }}/>
}