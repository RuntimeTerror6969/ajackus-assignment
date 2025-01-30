# User Management Dashboard

A simple web application for managing user details, built with React. This application allows users to view, add, edit, and delete user information using a mock backend API (JSONPlaceholder).

## Features

- **View Users**: Display a list of users with details (ID, Name, Email, Department)
- **Add Users**: Add new users to the system
- **Edit Users**: Modify existing user details
- **Delete Users**: Remove users from the system
- **Pagination**: Navigate through user records
- **Responsive Design**: Works on all screen sizes
- **Client-Side Validation**: Ensures data integrity
- **Error Handling**: Displays meaningful error messages

### Live Demo

[View Live Demo](https://ajackus-assignment-sigma.vercel.app/)

## Screenshots

![Dashboard View](/screenshots/dashboard.png)  
_Main User List View_

![Add User Form](/screenshots/add-user.png)  
_Add User Modal_

## Technologies Used

- React (JavaScript library)
- Fetch API (HTTP requests)
- JSONPlaceholder (Mock API)
- CSS (Styling)
- HTML5 (Markup)

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/RuntimeTerror6969/ajackus-assignment.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ajackus-assignment
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## Project Structure

```
src/
├── App.js                # Main application component
├── App.css               # Global styles
├── components/           # Reusable components
│   ├── UserList.jsx      # User list display
│   ├── UserForm.jsx      # Add/Edit user form
│   └── ErrorMessage.jsx  # Error message component
```

## API Usage

This project uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) as a mock backend:

- **GET /users**: Fetch all users
- **POST /users**: Add new user
- **PUT /users/:id**: Update user
- **DELETE /users/:id**: Delete user

## Development Process

### Challenges Faced

1. **API Limitations**: JSONPlaceholder doesn't persist changes
2. **State Management**: Handling complex state updates
3. **Responsive Design**: Ensuring proper display on all devices
4. **Form Validation**: Implementing comprehensive client-side validation

### Solutions Implemented

- Used local state to simulate data persistence
- Implemented proper state management patterns
- Added media queries and responsive design
- Created robust validation logic

### Future Improvements

- Add user authentication
- Implement server-side persistence
- Add advanced filtering and sorting
- Implement unit and integration tests
- Add dark mode support

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeatureName`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeatureName`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- JSONPlaceholder for providing the mock API
- React documentation
- Various online resources for design inspiration

---
