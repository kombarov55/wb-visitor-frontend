import React, {useState} from "react";
import Label from "../../UI/UIComponents/Label";
import ElevatedVertical from "../../UI/Layout/ElevatedVertical";
import Button from "../../UI/UIComponents/Button";
import ComparisonCommentsForm from "./ComparisonCommentsForm";

export default ({}) => {

    const [comments, setComments] = useState(["Чем ваш товар отличается от {}?", "Чем убедите купить ваш товар, а не {}?"])
    const [isAddingComments, setIsAddingComments] = useState(false)

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
                    <Button text={"Добавить"} onClick={() => setIsAddingComments(true)}/> :
                    <ComparisonCommentsForm afterSubmit={() => setIsAddingComments(false)}/>
            }

            <br/>
        </ElevatedVertical>
    </>
}