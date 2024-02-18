# ChatApp

## Project Structure

The project is divided into two main parts:

- `backend/` - Contains all the server-side code written in Node.js. It manages the RESTful API, WebSocket connections, authentication, and other server-side operations.

- `frontend/` - Holds the client-side code written in React. It's responsible for presenting a user-friendly interface, handling real-time interactions, and communicating with the backend server.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 20 or above)

### Setting Up the Backend

1. Navigate to the `backend/` directory from the terminal.
2. Copy the `.env.example` file to a new file named `.env` and fill in the necessary environment variables.
3. Install the dependencies with `npm install`.
4. Run the development server with `npm run dev`.

The backend API should now be up and running on `http://localhost:PORT`.

### Setting Up the Frontend

1. Navigate to the `frontend/` directory from the terminal.
2. Install the necessary node modules with `npm install`.
3. Start the development server with `npm run dev`.

## Features

- Real-time messaging
- Media sharing
