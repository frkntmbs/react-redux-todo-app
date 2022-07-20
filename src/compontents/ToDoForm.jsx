import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

function ToDoForm() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input) {
      dispatch(
        addTodo({
          id: nanoid(),
          title: input,
          status: false,
        })
      );
    }

    setInput("");
  };
  return (
    <form className="mb-10" onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="search"
          id="search-dropdown"
          className="block py-3 px-6 w-full z-20 text-md text-white rounded-full border-2 bg-gray-700  border-gray-600 placeholder-gray-400 focus:border-indigo-600 outline-none"
          placeholder="Todo Ekle"
          aria-label="Todo Ekle"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={!input}
          type="submit"
          className="absolute h-full top-0 right-0 p-2.5 text-xl text-white rounded-r-full border-2 bg-indigo-600 border-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 transition-colors disabled:bg-zinc-800 disabled:border-gray-600"
        >
          <AiOutlinePlus />
        </button>
      </div>
    </form>
  );
}

export default ToDoForm;
