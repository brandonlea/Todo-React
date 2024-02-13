import { React, useState } from "react";
import Tasks from "./components/Tasks.jsx";
import TodoItem from "./components/TodoItem.jsx";
import TaskForm from "./components/TaskForm.jsx";
import { AppContext } from "./context/AppContext.js";

export default function App() {
  const initList = [
    {
      id: 1,
      name: "Task 1",
    },
    {
      id: 2,
      name: "Task 2",
    },
    {
      id: 3,
      name: "Task 3",
    },
  ];

  const [list, setList] = useState(initList);

  return (
    <AppContext.Provider value={{ list, setList }}>
      <div className="flex flex-col justify-center bg-gray-900 h-screen">
        <header className="text-center text-3xl p-10">
          <h1 className="text-white">Todo List</h1>
        </header>

        <section>
          <TaskForm />

          <Tasks>
            {list.map((task) => (
              <TodoItem key={task.id} id={task.id} taskName={task.name} />
            ))}
          </Tasks>
        </section>
      </div>
    </AppContext.Provider>
  );
}
