import { useAutoAnimate } from "@formkit/auto-animate/react";
import {
  AiOutlineDelete,
  AiOutlineCheck,
  AiOutlineRollback,
} from "react-icons/ai";

import { useSelector } from "react-redux";
import { updateTodo, deleteTodo } from "../redux/todoSlice";

function ToDo() {
  const [animationParent] = useAutoAnimate();

  // const filter = useSelector((state) => state.filter);
  const { todoList } = useSelector((state) => state.todoList);

  return (
    <div
      className="todo-list flex justify-center flex-col"
      ref={animationParent}
    >
      {todoList?.map((todo) => (
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
            <button onClick={() => updateTodo(todo.id, !todo.status)}>
              {todo.status ? (
                <AiOutlineRollback className="text-xl" />
              ) : (
                <AiOutlineCheck className="text-xl" />
              )}
            </button>
            <button
              className="hover:text-red-600 transition-colors"
              onClick={() => deleteTodo(todo.id)}
            >
              <AiOutlineDelete className="text-xl" />
            </button>
          </span>
        </div>
      ))}

      {!todoList?.length && (
        <div className="bg-gray-800 border-gray-700 text-center text-white mb-4 border px-6 py-3 rounded-full w-3/5 mx-auto">
          Henüz todo eklenmedi
        </div>
      )}
    </div>
  );
}

export default ToDo;
