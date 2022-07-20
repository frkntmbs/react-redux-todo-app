import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setFilter } from "../redux/filterSlice";

function ToDoFilter() {
  const { filter } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleFilter = (status) => {
    dispatch(setFilter(status));
  };

  return (
    <div className="bg-gray-700 flex p-2 gap-5 text-white justify-between w-4/5 mx-auto rounded-full mb-5 text-sm">
      <button
        className={(filter === null && "bg-indigo-600") + " filter-button"}
        onClick={() => handleFilter(null)}
      >
        Tümünü Göster
      </button>
      <button
        className={(filter === true && "bg-indigo-600") + " filter-button"}
        onClick={() => handleFilter(true)}
      >
        Tamamlananlar
      </button>
      <button
        className={(filter === false && "bg-indigo-600") + " filter-button"}
        onClick={() => handleFilter(false)}
      >
        Kalanlar
      </button>
    </div>
  );
}

export default ToDoFilter;
