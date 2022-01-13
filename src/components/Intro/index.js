import React from "react";
import Button from "react-bootstrap/Button";
import style from "styled-components";

const IntroWrapper = style.div`
text-transform: lowercase;
color: white;
margin: 30%;
display: flex;
flex-direction: column;
align-items: center;
`;

const Logo = style.h1`
font-weight: 100;
font-size: 6rem;
margin: 0;
`;

const LogoDescription = style.h2`
font-weight: 100;
font-size: 1.5rem;
`;

function Intro() {
  return (
    <IntroWrapper>
      <Logo>ToDo</Logo>
      <LogoDescription class="logo__description">
        Do your thing.
      </LogoDescription>
      <Button variant="outline-light mt-3 w-75">Sign Up</Button>
    </IntroWrapper>
  );
}

export default Intro;
