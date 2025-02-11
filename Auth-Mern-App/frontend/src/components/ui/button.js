export function Button({ children, type = "button", className, onClick }) {
    return (
      <button
        type={type}
        className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-red-800 ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  