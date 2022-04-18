import { useEffect, useRef } from "react";
import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/default.css";
import MediumEditor from "medium-editor";
import styled from "styled-components";

const EditableText = () => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current !== undefined) {
      // eslint-disable-next-line no-unused-vars
      const et = new MediumEditor(ref.current, {
        toolbar: {
          buttons: ["bold", "italic", "underline"],
        },
        placeholder: {
          text: "",
        },
      });
    }
  }, [ref]);

  return (
    <EditableTextWrapper spellCheck={false} ref={ref}></EditableTextWrapper>
  );
};

const EditableTextWrapper = styled.div`
  outline: none;
  font-weight: normal;
`;
export default EditableText;
