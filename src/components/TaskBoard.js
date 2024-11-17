import React, { useState, useEffect } from 'react';
import TaskColumn from './TaskColumn';
import TaskForm from './TaskForm';
import TaskDetailModal from './TaskDetailModal';
import { getTasks } from '../services/api';
import { taskStatuses } from '../config/constants';

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const data = await getTasks();
      console.log('Fetched tasks:', data);
      setTasks(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching tasks in TaskBoard:', error);
      alert('Failed to load tasks. Please check your backend.');
    } finally {
      setLoading(false);
    }
  };

  const openTaskDetailModal = (task) => {
    setSelectedTask(task);
  };

  const closeTaskDetailModal = () => {
    setSelectedTask(null);
    fetchTasks(); 
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Task Management Application
      </h1>
      <TaskForm fetchTasks={fetchTasks} />
      {loading ? (
        <p className="text-center text-gray-500">Loading tasks...</p>
      ) : (
        <div className="grid grid-cols-4 gap-6">
          {taskStatuses.map((status) => (
            <TaskColumn
              key={status}
              status={status}
              tasks={tasks.filter((task) => task.status === status)} 
              openTaskDetailModal={openTaskDetailModal}
            />
          ))}
        </div>
      )}
      {selectedTask && (
        <TaskDetailModal task={selectedTask} closeModal={closeTaskDetailModal} />
      )}
    </div>
  );
};

export default TaskBoard;
