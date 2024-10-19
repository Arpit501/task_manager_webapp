// src/components/TaskForm.js
import React, { useState } from 'react';

export default function TaskForm({ addTask }) {
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: 'low',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask({ title: '', description: '', priority: 'low' });
  };

  return (
    <form onSubmit={handleSubmit}   className="h-[50%] bg-gray-500 p-10 rounded-lg shadow-lg flex flex-col space-y-4 mt-[-100px]" >
      <input
        type="text"
        placeholder="Task Title"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        className="p-2 border border-gray-300 rounded mb-2 w-full"
      />
      <textarea
        placeholder="Task Description"
        value={newTask.description}
        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        className="p-2 border border-gray-300 rounded mb-2 w-full"
      />
      <select
        value={newTask.priority}
        onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
        className="p-2 border border-gray-300 rounded w-full"
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button
        type="submit"
        className="mt-2 p-2 bg-blue-500 text-white rounded w-full"
      >
        Add Task
      </button>
    </form>
  );
}
