import { useEffect, useRef } from "react";
import styled from "styled-components";

function EditableText({ value }) {
  const $wrapper = useRef();
  useEffect(() => {
    // if ($wrapper.current.firstChild !== null) {
    //   $wrapper.current.removeChild($wrapper.current.firstChild);
    // }
    // value vindo diferente , precisa limpar alguam coisa
    // $wrapper.current.firstChild.textContent
    //Dar um jeito de tirar o textContent da porra da div caralho que raiva
    //Substuir O DE CIMA NAO PODE PQ ELE É O ORIGINAL, MAS PQ ACONTECE ISSO
  }, [value]);

  return (
    <EditableTextWrapper
      ref={$wrapper}
      contentEditable
      suppressContentEditableWarning
    >
      <>{value}</>
    </EditableTextWrapper>
  );
}

const EditableTextWrapper = styled.div`
  padding: 0;
  border: none;
  outline: none;
`;

export default EditableText;
