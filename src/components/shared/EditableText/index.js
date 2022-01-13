import styled from "styled-components";

function EditableText({ breakRow, onInput, children }) {
  const handleKeyCode = (event) => {
    if (event.key === "Enter") if (breakRow) event.target.blur();
  };

  return (
    <EditableTextWrapper
      onKeyDown={handleKeyCode}
      onChange={onInput}
    ></EditableTextWrapper>
  );
}

const EditableTextWrapper = styled.input`
  padding: 0.1rem 0.2rem;
  border: none;
  outline: none;
`;

export default EditableText;
