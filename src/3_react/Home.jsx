import React, { useState, useEffect } from 'react';
import Alert from './Alert';
import List from './List';

const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if (list) {
        return JSON.parse(localStorage.getItem('list'));
    } else {
        return [];
    }
}

const Home = () => {
    const [name, setName] = useState('');
    const [list, setList] = useState(getLocalStorage());
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (!name) {
            showAlert(true, 'danger', 'please enter a value');
        } else if (name && isEditing) {
            const updatedList = list.map((item) => {
                if (item.id === editId) {
                    return { ...item, title: name };
                }
                return item;
            });
            setList(updatedList);
            setName('');
            setEditId(null);
            setIsEditing(false);
            showAlert(true, 'success', 'value changes');
        } else {
            showAlert(true, 'success', 'item has been added');
            const newItem = { id: new Date().getTime().toString(), title: name };
            setList([...list, newItem]);
            setName('');
        }
    }

    const showAlert = (show = false, type = '', msg = '') => {
        setAlert({ show, type, msg });
    }

    const clearList = () => {
        showAlert(true, 'danger', 'all items deleted');
        setList([]);
    }

    const editItem = (id) => {
        const selectedItem = list.find((item) => item.id === id);
        setName(selectedItem.title);
        setEditId(id);
        setIsEditing(true);
    }

    const removeItem = (id) => {
        const updatedList = list.filter((item) => item.id !== id);
        setList(updatedList);
        showAlert(true, 'danger', 'item deleted');
    }

    return (
        <>
            <section>
                <form action="" onSubmit={handleSubmit}>
                    {alert.show && <Alert {...alert} removeAlert={() => showAlert()} list={list} />}
                    <h2>ToDoList App</h2>
                    <div className="form-control">
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='form-control' placeholder='enter data here' />
                        <button type="submit" className='btn btn-primary p-4'>
                            {isEditing ? 'edit' : 'submit'}
                        </button>
                    </div>
                </form>
                <br /><br />
                {
                    list.length > 0 && (
                        <div>
                            <List items={list} removeItem={removeItem} editItem={editItem} />
                            <button className='btn btn-danger p-4 m-4' onClick={clearList}>Clear All</button>
                        </div>
                    )
                }
            </section>
        </>
    );
};

export default Home;
