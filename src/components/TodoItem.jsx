import { FaEdit, FaRegSave } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext.js";

export default function TodoItem(props) {
  const { setList, list } = useContext(AppContext);
  const [isEdit, setEdit] = useState(false);
  const [editTask, setEditTask] = useState("");

  function handleRemove(id) {
    const newTask = list.filter((task) => task.id !== id);

    setList(newTask);
  }

  function handleEdit(event) {
    setEditTask(event.target.value);
  }

  function handleSave(id) {
    const newTask = list.map((task) => {
      if (task.id === id) {
        const updateTask = {
          ...task,
          name: editTask,
        };

        return updateTask;
      }

      return task;
    });

    setList(newTask);
    setEdit(false);
  }

  function toggleEdit(state) {
    setEditTask(props.taskName);
    setEdit(state);
  }

  return (
    <div className="bg-blue-300 mx-auto w-1/4 p-2 rounded">
      <div className="flex justify-between items-center px-3">
        {!isEdit ? (
          <h3>{props.taskName}</h3>
        ) : (
          <div className="flex space-between-4">
            <input
              defaultValue={props.taskName}
              onChange={handleEdit}
              type="text"
              className="p-1 bg-blue-300 border-2 border-gray-800 rounded focus:outline-none focus-visible:outline-none"
            />
            <button className="pl-2" onClick={() => handleSave(props.id)}>
              <FaRegSave />
            </button>
          </div>
        )}

        <div className="grid grid-flow-col space-x-3 text-2xl">
          <button onClick={() => handleRemove(props.id)}>
            <TiDelete />
          </button>
          <button onClick={() => toggleEdit(!isEdit)}>
            <FaEdit />
          </button>
        </div>
      </div>
    </div>
  );
}
