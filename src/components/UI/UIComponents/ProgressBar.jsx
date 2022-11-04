import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default ({currentValue, maxValue, width = "40vmin"}) => {
    return <ProgressBar completed={currentValue / maxValue * 100}
                        width={width}
                        height={"1vmax"}
                        labelSize={"0.9vmax"}
                        isLabelVisible={true}
    />
}