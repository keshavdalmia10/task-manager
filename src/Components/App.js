import React, { useState } from "react";
import AddTask from "./AddTask";
import "./style.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  function Task({ task, index, removeTask }) {
    return (
      <li className="list-group-item ">
        {task.title}
        <button
          className="remove"
          style={{ background: "red" }}
          onClick={() => removeTask(index)}
        >
          X
        </button>
      </li>
    );
  }

  const addTask = (title) => {
    const newTasks = [...tasks, { title }];

    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <div className="create-task">
        <AddTask addTask={addTask} />
      </div>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <Task task={task} index={index} key={index} removeTask={removeTask} />
        ))}
      </ul>
    </div>
  );
};

export default App;
