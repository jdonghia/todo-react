import { useEffect } from "react";
import styled from "styled-components";

function EditableText({ value }) {
  useEffect(() => {
    //Dar um jeito de tirar o textContent da porra da div caralho que raiva
  }, [value]);

  return (
    <EditableTextWrapper contentEditable suppressContentEditableWarning>
      {value}
    </EditableTextWrapper>
  );
}

const EditableTextWrapper = styled.div`
  padding: 0;
  border: none;
  outline: none;
`;

export default EditableText;
