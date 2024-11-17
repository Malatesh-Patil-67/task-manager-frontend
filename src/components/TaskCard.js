import React from 'react';

const TaskCard = ({ task, openTaskDetailModal }) => {
  return (
    <div
      className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={() => openTaskDetailModal(task)}
    >
      <h3 className="font-bold text-lg text-gray-800">{task.title || 'No Title'}</h3>
      <p className="text-sm text-gray-600">{task.description || 'No Description'}</p>
      <p className="text-xs text-gray-500">
        <strong>Status:</strong> {task.status}
      </p>
    </div>
  );
};

export default TaskCard;
