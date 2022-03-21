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
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <GrBold
                onMouseDown={() => {
                  let initialPos = window.getSelection().anchorOffset;
                  let finalPos = window.getSelection().focusOffset;

                  if (finalPos < initialPos) {
                    initialPos = window.getSelection().focusOffset;
                    finalPos = window.getSelection().anchorOffset;
                  }

                  const initialText = window
                    .getSelection()
                    .focusNode.textContent.substring(0, initialPos);
                  const finalText = window
                    .getSelection()
                    .focusNode.textContent.substring(
                      finalPos,
                      window.getSelection().focusNode.textContent.length
                    );

                  setTitleTemplate(
                    <p>
                      {initialText}
                      <b>{window.getSelection().toString()}</b>
                      {finalText}
                    </p>
                  );
                }}
                size={20}
              />
              <GrItalic size={20} />
              <GrUnderline size={20} />
            </div>
            <MdDeleteForever onClick={() => removeTask(id)} size={20} />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <EditableText value={titleTemplate}></EditableText>
          </Card.Title>
          <EditableText />
        </Card.Body>
      </TaskWrapper>
    </>
  );
}

export default Task;
