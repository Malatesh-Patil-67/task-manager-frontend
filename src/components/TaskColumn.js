import React from 'react';
import PropTypes from 'prop-types';
import TaskCard from './TaskCard';

const TaskColumn = ({ status, tasks = [], openTaskDetailModal }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-bold text-gray-700 mb-4">{status}</h2>
      {tasks && tasks.length > 0 ? ( 
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
  status: PropTypes.string.isRequired, 
  tasks: PropTypes.array, 
  openTaskDetailModal: PropTypes.func.isRequired,
};

TaskColumn.defaultProps = {
  tasks: [], 
};

export default TaskColumn;
