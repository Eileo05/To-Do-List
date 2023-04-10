import React from "react";
import ListItem from "./ListItem";


function List(props) {

    return (
        <ul>

            {props.items.map(item => <ListItem key={item.id} item={item} onDone={props.onDone} onItemdelete={props.onItemdelete}></ListItem> )}
            

        </ul>
    )

}

export default List;