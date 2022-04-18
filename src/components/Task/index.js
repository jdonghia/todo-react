import { Card } from "react-bootstrap";
import { GrBold, GrItalic, GrUnderline } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import styled from "styled-components";
import EditableText from "components/shared/EditableText";
import { useContext, useState, useEffect } from "react";
import { TaskContext } from "context/Task";

const TaskWrapper = styled(Card)`
  width: 22.5%;
  margin: 1% 1.25%;
`;

function Task({ id }) {
  const { removeTask } = useContext(TaskContext);
  const [titleTemplate, setTitleTemplate] = useState(<></>);

  return (
    <>
      <TaskWrapper>
        <Card.Header>
          <MdDeleteForever onClick={() => removeTask(id)} size={20} />
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <EditableText />
          </Card.Title>
          <EditableText />
        </Card.Body>
      </TaskWrapper>
    </>
  );
}

export default Task;
