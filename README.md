# Task Management Application - Frontend

  ## Table of Contents
  
  1. [Overview](#overview)  
  2. [Features](#features)    
  3. [Tech Stack](#tech-stack)  
  4. [Getting Started](#getting-started)  
       - [Prerequisites](#prerequisites)  
       - [Installation](#installation)  
       - [Running Locally](#running-locally)  
  5. [API Endpoints](#api-endpoints)  
  6. [Dockerization](#dockerization)  
  7. [Future Enhancements](#future-enhancements)  
     
 ## Overview 
  This repository contains the frontend of the Task Management Application built using **React** and **Tailwind CSS**. The application allows users to manage tasks with     functionalities like creating, viewing, updating, and deleting tasks.  

  ## Features

  - **Task Board**: Displays tasks categorized by their statuses (Pending, Started, Checking, Completed).
  - **Task Form**: Allows users to create new tasks.
  - **Task Detail Modal**: View detailed information about a selected task.
  - **Dynamic Updates**: Tasks update dynamically without requiring a page refresh.

## Tech Stack

- **React**: Framework for building the UI.  
      Why React? React provides a component-based architecture, making it easier to break down the UI into reusable parts like TaskBoard, TaskCard, etc.   
- **Tailwind CSS**: Utility-first CSS framework for styling.  
      Why TailwindCSS? it offered utility-first styling, which allowed rapid prototyping with minimal CSS files.  
- **Axios**: HTTP client for API interactions.  
      Why Axios? Built-in support for promise-based workflows aligns perfectly with modern JavaScript practices like `async/await`  
- **Docker**: Dockerized for easy deployment.
  
## Prerequisites
--**Node.js**: Version 18 or above (Download from Node.js official site).  
--**npm**: Comes bundled with Node.js for managing dependencies.  
--**Docker**: for running the application in a containerized environment (Download from Docker official site).
  ##  Installation

-- To set up the project locally, follow these steps:

  **Clone the repository**:  
  
     git clone https://github.com/Malatesh-Patil-67/task-manager-frontend.git  
      cd task-manager-frontend
      
  
  **Install dependencies**:  

     npm install  

  ## Running Locally

-- To start the application locally in development mode:

1. Run the following command to start the development server:
    
        npm start  
    
2.Open your browser and navigate to:
    
    http://localhost:3000
    

## Dockerization
    
  **Build the Docker Image**:
     
    
      docker build -t task-manager-frontend .
    
  **Run the Docker Container**: 
    


      docker run -d -p 8080:80 task-manager-frontend
    
   -- This maps port `8080` on your host machine to port `80` in the container.

  **Access the Application**: Open your browser and go to:  
     
    
        `http://localhost:8080`.

## API Endpoints


| Method     | Endpoint       | Description                    |
|------------|----------------|--------------------------------|
| **GET**    | `/tasks`       | Fetch all tasks               |
| **GET**    | `/tasks/{id}`  | Fetch a task by its ID        |
| **POST**   | `/tasks`       | Create a new task             |
| **PUT**    | `/tasks/{id}`  | Update an existing task       |
| **DELETE** | `/tasks/{id}`  | Delete a task                 |


        

## Future Enhancements

- **Add Authentication**: Secure the application with login functionality.
- **Advanced Filtering**: Allow filtering tasks by date, priority, etc.
- **Notifications**: Real-time task updates using WebSockets.
