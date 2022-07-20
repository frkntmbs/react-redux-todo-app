// Components
import ToDoForm from "./compontents/ToDoForm";
import ToDo from "./compontents/ToDo";
import ToDoFilter from "./compontents/ToDoFilter";

function App() {
  return (
    <div className="App position-relative">
      <div className="container-sm mx-auto py-8">
        <ToDoForm />
        <ToDoFilter />

        <ToDo />
      </div>
    </div>
  );
}

export default App;
