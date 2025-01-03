Here's the updated version of the `README.md` with the requested features structured properly, including the "1 second ago" timer feature and the update functionality:

```markdown
# Todo List App

A simple Todo List app built with **Vite** and **React** that allows users to add, update, mark tasks as completed, and delete tasks, with a "time ago" feature to show when the task was last updated.

## Features

- **Add Tasks**: Add new tasks to your todo list.
- **Mark as Completed**: Mark tasks as completed.
- **Delete Tasks**: Remove tasks from your todo list.
- **Update Tasks**: Edit existing tasks.
- **Time Ago**: Display the time ago feature, showing when a task was last updated (e.g., "1 second ago", "5 minutes ago").
- **Responsive**: The app is responsive and works on both mobile and desktop devices.

## Technologies Used

- **Vite**: A fast build tool for modern web development.
- **React**: A JavaScript library for building user interfaces.
- **CSS**: For styling the app.
- **Day.js**: A lightweight date library for the "time ago" feature.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (LTS version recommended)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/adhnannp/todo-list-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd todo-list-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   The app will be running at [http://localhost:3000](http://localhost:3000).

## Usage

- **Add a Task**: Type a task in the input field and press Enter or click the "Add" button.
- **Mark Task as Completed**: Click the checkbox next to a task to mark it as completed.
- **Delete Task**: Click the "Delete" button next to a task to remove it.
- **Update Task**: Click the "Edit" button next to a task to update it.
- **Time Ago**: The app will automatically show the time elapsed since a task was last updated, e.g., "1 second ago", "5 minutes ago", "2 hours ago", etc.

## Example of "Time Ago" Feature

Tasks will show how long ago they were updated:

- **"1 second ago"** - when the task was just updated.
- **"5 minutes ago"** - when the task was last updated 5 minutes ago.
- **"1 day ago"** - when the task was last updated 1 day ago.

## Project Structure

```
todo-list-app/
│
├── src/
│   ├── App.jsx           # The main component where tasks are managed
│   ├── TodoItem.jsx      # Component for rendering individual todo items
│   ├── TodoList.jsx      # Component for displaying the list of tasks
│   └── styles/
│       └── style.css     # Styles for the app
│
└── package.json          # Project dependencies and scripts
```

## Contributing

Feel free to open an issue or submit a pull request if you'd like to contribute to this project.

## License

ISC