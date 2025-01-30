import { useState, useEffect } from "react";
import "./UserForm.css"; // Ensure this is imported for styles to apply

const UserForm = ({ user, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: { name: "" },
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        company: { name: user.company?.name || "" },
      });
    }
  }, [user]);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (/\d/.test(formData.name)) {
      newErrors.name = "Name cannot contain numbers";
    }

    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Department Validation
    if (!formData.company.name.trim()) {
      newErrors.company = "Department is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({ ...formData, id: user?.id });
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{user ? "Edit User" : "Add User"}</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <label>
            Name:
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={errors.name ? "error-input" : ""}
            />
            {errors.name && <div className="error-message">{errors.name}</div>}
          </label>

          {/* Email Input */}
          <label>
            Email:
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={errors.email ? "error-input" : ""}
            />
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}
          </label>

          {/* Department Input */}
          <label>
            Department:
            <input
              type="text"
              value={formData.company.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  company: { ...formData.company, name: e.target.value },
                })
              }
              className={errors.company ? "error-input" : ""}
            />
            {errors.company && (
              <div className="error-message">{errors.company}</div>
            )}
          </label>

          {/* Buttons */}
          <div className="form-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
