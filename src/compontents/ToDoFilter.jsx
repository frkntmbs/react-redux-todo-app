import React from "react";

function ToDoFilter({ filter, setFilter }) {
  return (
    <div className="bg-gray-700 flex p-2 gap-5 text-white justify-between w-4/5 mx-auto rounded-full mb-5 text-sm">
      <button
        className={(filter === undefined && "bg-indigo-600") + " filter-button"}
        onClick={() => setFilter()}
      >
        Tümünü Göster
      </button>
      <button
        className={(filter === true && "bg-indigo-600") + " filter-button"}
        onClick={() => setFilter(true)}
      >
        Tamamlananlar
      </button>
      <button
        className={(filter === false && "bg-indigo-600") + " filter-button"}
        onClick={() => setFilter(false)}
      >
        Kalanlar
      </button>
    </div>
  );
}

export default ToDoFilter;
