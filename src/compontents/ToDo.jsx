import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import {
  AiOutlinePlus,
  AiOutlineDelete,
  AiOutlineCheck,
  AiOutlineRollback,
} from "react-icons/ai";

function ToDo({ todoList, filter, updateToDo, deleteToDo }) {
  const [animationParent] = useAutoAnimate();

  return (
    <div
      className="todo-list flex justify-center flex-col"
      ref={animationParent}
    >
      {(filter || filter === false
        ? todoList.filter((todo) => todo.status === filter)
        : todoList
      ).map((todo) => (
        <div
          key={todo.id}
          className={
            (!todo.status
              ? "bg-zinc-800 border-zinc-700"
              : "bg-indigo-600 border-indigo-700") + " todo-item"
          }
          role="alert"
        >
          <span>{todo.title}</span>
          <span className="absolute top-0 bottom-0 right-0 px-6 py-3.5 flex gap-4">
            <button onClick={() => updateToDo(todo.id, !todo.status)}>
              {todo.status ? (
                <AiOutlineRollback className="text-xl" />
              ) : (
                <AiOutlineCheck className="text-xl" />
              )}
            </button>
            <button
              className="hover:text-red-600 transition-colors"
              onClick={() => deleteToDo(todo.id)}
            >
              <AiOutlineDelete className="text-xl" />
            </button>
          </span>
        </div>
      ))}

      {!todoList.length && (
        <div className="bg-gray-800 border-gray-700 text-center text-white mb-4 border px-6 py-3 rounded-full w-3/5 mx-auto">
          Henüz todo eklenmedi
        </div>
      )}
    </div>
  );
}

export default ToDo;
