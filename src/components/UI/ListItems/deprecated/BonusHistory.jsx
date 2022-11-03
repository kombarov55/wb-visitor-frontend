import React from "react";
import Label from "../UIComponents/Label";
import FormatDate from "../../../Util/FormatDate";

export default ({dto}) => {
    const {diff, amount, creationDate} = dto

    return (
        <div key={creationDate} style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
            padding: "1vmax"
        }}>
            <Label size={"medium"} text={diff > 0 ? `+${diff}` : `${diff}`}/>
            <Label size={"small"} text={`Итог: ${amount}`}/>
            <Label size={"small"}text={`Дата изменения: ${FormatDate(creationDate)}`}/>
        </div>
    )
}