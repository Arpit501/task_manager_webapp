# Task Manager

A simple task management application built with React. This app allows users to create, edit, complete, and delete tasks while providing a user-friendly interface.

## Features

- Add new tasks
- Edit existing tasks
- Mark tasks as complete/undo
- Delete tasks
- Responsive design for mobile and desktop

# Task Sorting Approach
- Tasks are sorted based on priority and completion status. The sorting logic works as follows:
- Completion Status: If a task is completed, it is moved to the bottom of the list. This is done by checking the completed property of each task.
- Priority Sorting: For tasks that are not completed, they are sorted by their priority level. The priority order is defined as:
- High (1)
- Medium (2)
- Low (3)


## Technologies Used

- **Frontend**: Next.js, Tailwind CSS
- **State Management**: React hooks (useState, useEffect)
- **Development Tools**: npm

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- npm (comes with Node.js)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/task-management-app.git

# run command npm i