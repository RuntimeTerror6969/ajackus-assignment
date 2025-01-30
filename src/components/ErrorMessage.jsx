export default function ErrorMessage({ message, onClose }) {
  return (
    <div className="error-message">
      <span>{message}</span>
      <button onClick={onClose}>&times;</button>
    </div>
  );
}
