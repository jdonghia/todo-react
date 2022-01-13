import { useContext } from "react";
import { TaskContext } from "context/Task";

function Tasks() {
  const { tasks } = useContext(TaskContext);

  return <ul className="p-0 d-flex flex-wrap">{tasks.map((task) => task)}</ul>;
}

export default Tasks;
