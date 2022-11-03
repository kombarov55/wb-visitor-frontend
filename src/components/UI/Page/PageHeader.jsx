import React from "react";
import {useNavigate} from "react-router-dom";
import Avatar from "../Icons/Avatar";
import Label from "../UIComponents/Label";
import Icons from "../../../Util/Icons";

export default ({title}) => {
    const navigate = useNavigate()

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "3vw",
            justifyContent: "space-between",
            alignItems: "center",

            width: "95vw",
            marginLeft: "1vmax"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "1vmax",
                width: "100%"
            }}>
                {/*<Avatar src={"https://sun1-25.userapi.com/s/v1/ig2/k86VwksM-5qLte5T4acaWr-qOL9bWXxUXaIYAHtyvfFbkBWkrFNBGcko3rxa0mkFtxKKXcVxXRbOfzqoIAwVogmB.jpg?size=50x50&quality=96&crop=126,0,342,342&ava=1"}/>*/}
                <Label text={title} size={"normal"}/>
            </div>

            {/*<img src={Icons.back} style={{*/}
            {/*    width: "5vmax",*/}
            {/*    height: "5vmax"*/}
            {/*}} onClick={() => navigate(-1)}/>*/}
        </div>

    )
}
