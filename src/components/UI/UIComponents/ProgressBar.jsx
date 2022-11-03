import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default ({currentValue, maxValue}) => {
    return <ProgressBar completed={currentValue / maxValue * 100}
                        width={"40vmin"}
                        height={"1vmax"}
                        labelSize={"0.9vmax"}
                        isLabelVisible={false}
    />
}