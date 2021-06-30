import React from 'react'

export default function TaskRow(props) {
    return (
        <tr key={props.task.id}>
            <td>{props.task.name}</td>
            <td>
                <input type="checkbox" checked={props.task.done} onChange={() => props.toggleTask(props.task)} />
            </td>
        </tr>
    )  
}
