import { createContext, useState } from "react";
import Task from "components/Task";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  let [id, setId] = useState(0);

  function createTask() {
    setTasks([...tasks, <Task id={id} key={id}></Task>]);
    setId(id + 1);
  }

  function removeTask(id) {
    setTasks(tasks.filter((task) => task.props.id !== id));
  }

  return (
    <TaskContext.Provider value={{ createTask, removeTask, tasks }}>
      {children}
    </TaskContext.Provider>
  );
};
