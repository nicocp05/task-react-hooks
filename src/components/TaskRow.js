import React from 'react'

export default function TaskRow(props) {
    return props.tasks.map((task) => (
        <tr key={task.id}>
            <td>{task.name}</td>
            <td>
                <input type="checkbox" checked={task.done} onChange={() => props.toggleTask(task)} />
            </td>
        </tr>
    )  
)}
