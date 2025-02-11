export function Textarea({ name, placeholder, value, onChange, required }) {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full p-2 border border-gray-300 rounded"
      />
    );
  }
  