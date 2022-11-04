import React, {useEffect, useState} from "react";
import Label from "../../UI/UIComponents/Label";
import ElevatedVertical from "../../UI/Layout/ElevatedVertical";
import Button from "../../UI/UIComponents/Button";
import ComparisonCommentsForm from "./ComparisonCommentsForm";
import axios from "axios";
import Links from "../../../Util/Links";

export default ({}) => {

    const [comments, setComments] = useState(["Чем ваш товар отличается от {}?", "Чем убедите купить ваш товар, а не {}?"])
    const [isAddingComments, setIsAddingComments] = useState(false)

    useEffect(() => loadComments(), [])

    function loadComments() {
        axios.get(Links.comparisonComments).then(rs => {setComments(rs.data)})
    }

    return <>
        <ElevatedVertical>
            <Label text={"Комментарии со сравнением"} size={"medium"}/>

            <ElevatedVertical margin={"0"} width={"98%"}>
                {
                    comments.length == 0 ?
                        <Label text={"Пусто..."} fontStyle={"italic"}/> :
                        comments.map(v =>
                            <ElevatedVertical margin={"0"} width={"98%"}>
                                <Label text={v}/>
                            </ElevatedVertical>
                        )
                }
            </ElevatedVertical>
            {
                !isAddingComments ?
                    <Button text={"Заменить"} onClick={() => setIsAddingComments(true)}/> :
                    <ComparisonCommentsForm afterSubmit={() => {
                        setIsAddingComments(false)
                        loadComments()
                    }}/>
            }

            <br/>
        </ElevatedVertical>
    </>
}