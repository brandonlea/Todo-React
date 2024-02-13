import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext.js";

export default function TaskForm(props) {
  const { setList, list } = useContext(AppContext);
  const [task, setTask] = useState("");

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleAdd() {
    const newTask = list.concat({ id: list.length + 1, name: task });

    setList(newTask);
    setTask("");
  }

  return (
    <div className="flex items-center justify-center">
      <input
        className="bg-gray-900 p-1.5 placeholder-white text-white border-2 border-purple-700 border-r-0 focus:outline-none focus-visible:outline-none"
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Enter task"
      />
      <button
        onClick={handleAdd}
        type="submit"
        className="p-2 text-white bg-gradient-to-r from-purple-600 to-purple-900 rounded-l-none rounded-md"
      >
        Add Task
      </button>
    </div>
  );
}
