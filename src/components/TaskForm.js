import React, { useState } from 'react';
import { createTask } from '../services/api';
import { taskStatuses } from '../config/constants';

const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Pending'); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTask = {
        title,
        description,
        status,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      console.log('Creating task:', newTask);
      await createTask(newTask);
      setTitle('');
      setDescription('');
      setStatus('Pending');
      fetchTasks(); 
    } catch (error) {
      console.error('Error creating task:', error);
      alert('Failed to create task. Please try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow p-6 mb-6 max-w-md mx-auto"
    >
      <h3 className="text-xl font-semibold text-gray-700 mb-4">
        Create New Task
      </h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {taskStatuses.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
      >
        Create Task
      </button>
    </form>
  );
};

export default TaskForm;
