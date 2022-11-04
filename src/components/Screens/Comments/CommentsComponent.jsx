import React, {useState} from "react";
import Label from "../../UI/UIComponents/Label";
import ElevatedVertical from "../../UI/Layout/ElevatedVertical";
import Button from "../../UI/UIComponents/Button";
import CommentsForm from "./CommentsForm";

export default ({}) => {

    const [comments, setComments] = useState(["Из какого материала товар?", "Есть доставка в казань?"])
    const [isAddingComments, setIsAddingComments] = useState(false)

    return <>
        <ElevatedVertical>
            <Label text={"Комментарии"} size={"medium"}/>

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
                    <CommentsForm afterSubmit={() => setIsAddingComments(false)}/>
            }

            <br/>
        </ElevatedVertical>
    </>
}