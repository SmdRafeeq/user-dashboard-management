# User Dashboard React Application

This is a user dashboard application built with React. The app allows users to view, add, edit, and delete user information using API calls to a mock JSONPlaceholder API. The project is modular, with reusable components, and handles errors gracefully.

## Features

- Fetch and display a list of users.
- Add new users to the list.
- Edit user information.
- Delete users from the list.
- Error handling with user-friendly error messages.

## Prerequisites

Before starting the project, ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/user-dashboard.git
   cd user-dashboard
   ```

2. **Install dependencies**:

   Install the necessary packages using npm:

   ```bash
   npm install
   ```

3. **Run the development server**:

   Start the application on your local machine:

   ```bash
   npm start
   ```

   This will start the app at [http://localhost:3000](http://localhost:3000).

---

## Component Structure

The app is divided into the following key components:

- **App Component**: The main wrapper component that holds all child components.
- **UserList Component**: Displays the list of users fetched from the API.
- **UserForm Component**: Handles adding and editing user details.
- **ErrorBoundary Component**: Catches and handles errors, displaying user-friendly messages.

---

## Component Details

### 1. **Fetching and Displaying Users**

- Use the `componentDidMount()` lifecycle method to fetch users from the API (`JSONPlaceholder`).
- Display users in a table/list format with "Edit" and "Delete" buttons.

Example code for fetching users:

```javascript
componentDidMount() {
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => this.setState({ users: response.data }))
    .catch(error => this.setState({ error: 'Failed to load users' }));
}
```
