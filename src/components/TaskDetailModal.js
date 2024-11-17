import React, { useState } from 'react';
import { updateTask, deleteTask } from '../services/api';
import { taskStatuses } from '../config/constants';

const TaskDetailModal = ({ task, closeModal }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  const handleUpdate = async () => {
    try {
      await updateTask(task.id, {
        ...task,
        title,
        description,
        status,
        updatedAt: new Date().toISOString(),
      });
      closeModal();
    } catch (error) {
      alert(error.message);
      console.error('Error updating task:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask(task.id);
      closeModal();
    } catch (error) {
      alert(error.message);
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h3 className="text-2xl font-bold mb-4 text-center">Edit Task</h3>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        <div className="flex justify-between mt-4">
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Update
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Delete
          </button>
          <button
            onClick={closeModal}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailModal;
