import React, { useState, useEffect } from 'react';
import List from './components/List';
import Item from './components/Item';
import TodoForm from './components/TodoForm';
import './Todo.css';
import Modal from './components/modal';

const SAVED_ITEMS='savedItems'
function Todo() {

    const [showModal, setShowModal] = useState(false)
    const [items, setItems] = useState([])

    useEffect(()=>{
        let savedItem= JSON.parse(localStorage.getItem(items))
        if (savedItem){
            setItems(savedItem);
        }
    },[])

    useEffect(()=>{
        localStorage.setItem(SAVED_ITEMS,JSON.stringify(items))
    },[items])


    function onAddItem(text) {
        let it = new Item(text)
        setItems([...items, it])
        OnhideModal();

    }

    function onItemdelete(item) {
        let FilteredItems = items.filter(it => it.id !== item.id)

        setItems(FilteredItems)
    }

    function onDone(item) {
        let upDateItems = items.map(it => {
            if (it.id === item.id) {
                it.done = !it.done;
            }
            return it;
        })

        setItems(upDateItems);
    }

    function OnhideModal() {
        setShowModal(false);
    }

    return (
        <div className='container'>
            <header className='header'>
                <h1> TODO</h1>
                <button className='buttonAdd' onClick={() => { setShowModal(true) }}>+</button>
            </header>

            <List onDone={onDone} onItemdelete={onItemdelete} items={items}></List>

            <Modal show={showModal} OnhideModal={OnhideModal}>
                <TodoForm onAddItem={onAddItem}></TodoForm>
            </Modal>



        </div>
    )
}

export default Todo;
