import React, { useState } from 'react';


function TodoForm(props) {

    const [text, SetText] = useState("");

    function handleChange(event) {
        let t = event.target.value;
        SetText(t);
    }

    function AddItens(event) {
        event.preventDefault();
        if (text) {
            props.onAddItem(text)
            SetText("");
        }
    }

    return (
        <form>

            <input onChange={handleChange} type={'text'} value={text}></input>

            <button onClick={AddItens}>Adicionar</button>

        </form>
    )
}

export default TodoForm;