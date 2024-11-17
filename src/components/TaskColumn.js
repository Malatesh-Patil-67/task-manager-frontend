import React from 'react';
import PropTypes from 'prop-types'; // For type-checking props
import TaskCard from './TaskCard';

const TaskColumn = ({ status, tasks = [], openTaskDetailModal }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-bold text-gray-700 mb-4">{status}</h2>
      {tasks && tasks.length > 0 ? ( // Safeguard for undefined tasks
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            openTaskDetailModal={openTaskDetailModal}
          />
        ))
      ) : (
        <p className="text-gray-400 text-center">No tasks in this status.</p>
      )}
    </div>
  );
};

// Type-checking props to ensure expected data types
TaskColumn.propTypes = {
  status: PropTypes.string.isRequired, // 'status' must be a string
  tasks: PropTypes.array, // 'tasks' must be an array
  openTaskDetailModal: PropTypes.func.isRequired, // 'openTaskDetailModal' must be a function
};

// Default props for tasks
TaskColumn.defaultProps = {
  tasks: [], // Default to an empty array
};

export default TaskColumn;
