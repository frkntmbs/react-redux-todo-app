import { useState } from "react";

// Components
import ToDoForm from "./compontents/ToDoForm";
import ToDo from "./compontents/ToDo";
import ToDoFilter from "./compontents/ToDoFilter";

function App() {
  const [todoList, setToDoList] = useState([]);
  const [filter, setFilter] = useState();

  const addToDo = (todo) => {
    setToDoList([...todoList, todo]);
  };

  const deleteToDo = (id) => {
    setToDoList((todoList) => todoList.filter((todo) => todo.id !== id));
  };

  const updateToDo = (id, s) => {
    setToDoList((todoList) =>
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: s };
        }
        return todo;
      })
    );
  };

  return (
    <div className="App position-relative">
      <div className="container-sm mx-auto py-8">
        <ToDoForm onSubmit={addToDo} />
        <ToDoFilter filter={filter} setFilter={setFilter} />

        <ToDo
          todoList={todoList}
          filter={filter}
          updateToDo={updateToDo}
          deleteToDo={deleteToDo}
        />
      </div>
    </div>
  );
}

export default App;
