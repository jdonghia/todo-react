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
  const [title, setTitle] = useState("");

  const handleRemoveTask = () => removeTask(id);

  const emboldText = () => {
    var parentEl;
    if (window.getSelection) {
      let sel = window.getSelection();
      if (sel.rangeCount) {
        parentEl = sel.getRangeAt(0).commonAncestorContainer;
        if (parentEl.nodeType !== 1) {
          parentEl = parentEl.parentNode;
          console.log(parentEl);
        }
      }
    }
  };

  return (
    <>
      <h1>{title}</h1>
      <TaskWrapper>
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <GrBold onMouseDown={emboldText} size={20} />
              <GrItalic size={20} />
              <GrUnderline size={20} />
            </div>
            <MdDeleteForever onClick={handleRemoveTask} size={20} />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <EditableText
              breakRow
              onInput={async (event) => {
                setTitle(event.target.value);
              }}
            ></EditableText>
          </Card.Title>
          <EditableText />
        </Card.Body>
      </TaskWrapper>
    </>
  );
}

export default Task;
