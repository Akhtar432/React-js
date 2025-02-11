export function Input({ type, name, placeholder, value, onChange, required, accept }) {
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        accept={accept}
        className="w-full p-2 border border-gray-300 rounded"
      />
    );
  }
  