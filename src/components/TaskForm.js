import React, {useContext, useState, useEffect} from 'react';
import {TaskListContext} from "../context/TaskListContext";

const TaskForm = () => {
    const {addTask, clearList, editTask, editItem} = useContext(TaskListContext)
    const [title, setTitle] = useState("")
    console.log(title)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!editItem) {
            addTask(title);
            setTitle("");

        } else {
            editTask(title, editItem.id);
        }


    };

    const handleChange = (e) => {
        setTitle(e.target.value);

    };


    useEffect(() => {
        if (editItem) {
            setTitle(editItem.title);
        } else {
            setTitle("");

        }
    }, [editItem]);


    return (
        <form onSubmit={handleSubmit} className="form">
            <input value={title} onChange={handleChange} type="text" className="task-input" placeholder="please add your task..."
                   required/>
            <div className="buttons">
                <button onClick={() => window.location.reload(false)} className="btn add-task-btn" type="submit">
                    {editItem ? "Edit Task" : "Add Task"}
                </button>
                <button onClick={clearList} className="btn clear-btn">
                    Clear
                </button>
            </div>
        </form>


    );
};

export default TaskForm;