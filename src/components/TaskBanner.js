import React from 'react'

export default function TaskBanner(props) {
    return (
        <h4 className="bg-primary text-white text-center p-4">
            TaskApp ({props.taskItems.filter(task => !task.done).length} tasks to do)
        </h4>
    )
}
