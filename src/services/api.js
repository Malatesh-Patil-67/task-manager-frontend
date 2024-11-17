import axios from 'axios';
import { BASE_URL, DEFAULT_TIMEOUT } from '../config/constants';

const apiClient = axios.create({
  baseURL: BASE_URL.replace(/\/+$/, ''),
  timeout: DEFAULT_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});


const handleAxiosError = (error) => {
  if (error.code === 'ECONNABORTED') {
    console.error('Request timed out:', error.message);
    throw new Error('The request took too long - please try again later.');
  } else if (error.response) {
    console.error(
      `Error Response: ${error.response.status} - ${error.response.statusText}`,
      error.response.data
    );
    if (error.response.status === 404) {
      throw new Error('Requested resource not found.');
    }
    if (error.response.status === 500) {
      throw new Error('Internal server error occurred. Please try again later.');
    }
    throw new Error(error.response.data.message || 'An error occurred.');
  } else {
    console.error('Unknown error occurred:', error.message);
    throw new Error('An unexpected error occurred. Please try again.');
  }
};

// Fetch all tasks
export const getTasks = async () => {
  try {
    console.log('Fetching tasks from API:', BASE_URL);
    const response = await apiClient.get('/');
    console.log('Tasks fetched successfully:', response.data);
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    handleAxiosError(error);
  }
};

// Create a new task
export const createTask = async (task) => {
  try {
    console.log('Creating task with data:', task); 
    const response = await apiClient.post('/', task);
    console.log('Task created successfully:', response.data);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

// Update an existing task
export const updateTask = async (id, updatedTask) => {
  try {
    console.log(`Updating task with ID: ${id}`, updatedTask);
    const response = await apiClient.put(`/${id}`, updatedTask);
    console.log('Task updated successfully:', response.data);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

// Delete a task
export const deleteTask = async (id) => {
  try {
    console.log(`Deleting task with ID: ${id}`);
    await apiClient.delete(`/${id}`);
    console.log(`Task with ID ${id} deleted successfully.`);
  } catch (error) {
    handleAxiosError(error);
  }
};
