import { useState, useEffect } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [error, setError] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?_page=${currentPage}&_limit=${itemsPerPage}`
      );
      if (!response.ok) throw new Error("Failed to fetch users");

      // Get total count from headers
      const totalCount = response.headers.get("x-total-count");
      setTotalPages(Math.ceil(totalCount / itemsPerPage));

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleAddUser = async (user) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        }
      );
      if (!response.ok) throw new Error("Failed to add user");
      const newUser = await response.json();
      setUsers([...users, newUser]);
      setIsFormOpen(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUpdateUser = async (user) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${user.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        }
      );
      if (!response.ok) throw new Error("Failed to update user");
      const updatedUser = await response.json();
      setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
      setIsFormOpen(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) throw new Error("Failed to delete user");
      setUsers(users.filter((user) => user.id !== userId));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1>User Management Dashboard</h1>
      <button className="add-btn" onClick={() => setIsFormOpen(true)}>
        Add User
      </button>

      {error && <ErrorMessage message={error} onClose={() => setError("")} />}

      <UserList
        users={users}
        onEdit={(user) => {
          setEditingUser(user);
          setIsFormOpen(true);
        }}
        onDelete={handleDeleteUser}
      />

      {isFormOpen && (
        <UserForm
          user={editingUser}
          onClose={() => {
            setIsFormOpen(false);
            setEditingUser(null);
          }}
          onSubmit={editingUser ? handleUpdateUser : handleAddUser}
        />
      )}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
