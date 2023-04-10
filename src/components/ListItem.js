import React from "react";
import Card from "./Card";
import Modal from "./modal";

function ListItem(props) {

    function DoneImg(props) {
        if (props.done) {
            return (
                <img alt="done" src="./assets/on.png"></img>
            )
        } else {
            return (
                <img alt="undone" src="./assets/off.png"></img>

            )
        }

    }


    return (
            <li >
                <Card className={props.item.done ? 'done item' : 'item'}>
                    {props.item.text}
                    <div>
                        <button onClick={() => { props.onDone(props.item) }}><DoneImg done={props.item.done}></DoneImg></button>
                        <button onClick={() => { props.onItemdelete(props.item) }}><img alt="delete" src="./assets/delete.png"></img></button>
                    </div>
                </Card>
            </li>  
    )
}

export default ListItem;