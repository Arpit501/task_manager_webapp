import React, { useState } from 'react';

const Task = ({ task, toggleComplete, deleteTask, editTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState({ ...task });

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditedTask({ ...editedTask, [name]: value });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        editTask(editedTask);
        setIsEditing(false);
    };

    return (
        <li className={`border rounded-lg shadow-lg p-4 mb-4 ${task.completed ? 'bg-green-200' : 'bg-white'}`}>
            {isEditing ? (
                <form onSubmit={handleEditSubmit} className="flex flex-col gap-2">
                    <input
                        type="text"
                        name="title"
                        value={editedTask.title}
                        onChange={handleEditChange}
                        className="border rounded p-2 focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    />
                    <textarea
                        name="description"
                        value={editedTask.description}
                        onChange={handleEditChange}
                        className="border rounded p-2 focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    />
                    <select
                        name="priority"
                        value={editedTask.priority}
                        onChange={handleEditChange}
                        className="border rounded p-2 focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    >
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                    <div className="flex justify-between">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                            Save
                        </button>
                        <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">
                            Cancel
                        </button>
                    </div>
                </form>
            ) : (
                <div >
                    <h3 className="font-bold text-lg">{task.title}</h3>
                    <p className="text-gray-700">{task.description}</p>
                    <p className={`text-sm ${task.priority === 'high' ? 'text-red-500' : task.priority === 'medium' ? 'text-yellow-500' : 'text-green-500'}`}>
                        Priority: {task.priority}
                    </p>
                    <div className="flex flex-wrap justify-between mt-4 gap-2">
                        <button
                            onClick={() => toggleComplete(task.id)}
                            className={`flex-1 min-w-[100px] px-2 sm:px-3 py-2 rounded ${task.completed ? 'bg-gray-600' : 'bg-green-500'} text-white hover:bg-opacity-90 transition`}
                        >
                            {task.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="flex-1 min-w-[100px] bg-yellow-500 text-white px-2 sm:px-3 py-2 rounded hover:bg-yellow-600 transition"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => deleteTask(task.id)}
                            className="flex-1 min-w-[100px] bg-red-500 text-white px-2 sm:px-3 py-2 rounded hover:bg-red-600 transition"
                        >
                            Delete
                        </button>
                    </div>


                </div>
            )}
        </li>
    );
};

export default Task;
