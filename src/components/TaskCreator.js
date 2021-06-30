import React, { useState } from 'react'

export default function TaskCreator(props) {

    const [newTaskName, setNewTaskName] = useState('');

    const updateNewTaskValue = e => setNewTaskName(e.target.value);

    const createNewTask = () => {
        props.callback(newTaskName);
        setNewTaskName('');
    }

    return (
        <div className="my-1">
            <input type="text" className="form-control" style={{width: "300px"}} value={newTaskName} onChange={updateNewTaskValue} placeholder="Write task" />
            <button className="btn btn-primary mt-1" onClick={createNewTask}>Add task</button>
        </div>
    )
}
