import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo } from '../app/todoSlice';

const EditTodo = ({ todoId, onClose }) => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.find((t) => t.id === todoId));

  const [text, setText] = useState(todo?.text || '');

  const handleSave = () => {
    if (text.trim()) {
      dispatch(editTodo({ id: todoId, text }));
      onClose(); // Close the modal or edit form
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Edit Todo</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Edit your todo"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;