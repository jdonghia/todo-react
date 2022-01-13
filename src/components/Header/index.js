import { Navbar, Button } from "react-bootstrap";
import { useContext } from "react";
import { TaskContext } from "context/Task";

function Header() {
  const { createTask } = useContext(TaskContext);
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="py-3 px-4 d-flex justify-content-between"
    >
      <Navbar.Brand>toDo</Navbar.Brand>
      <Button onClick={createTask} variant="outline-dark">
        Create Task
      </Button>
    </Navbar>
  );
}

export default Header;
