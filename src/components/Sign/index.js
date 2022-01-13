import { Form, Button } from "react-bootstrap";
import styled from "styled-components";

const Login = styled.div`
  margin-top: 25%;
  width: 50%;
  align-self: center;
  display: flex;
  flex-direction: column;
`;

function Sign() {
  return (
    <Login>
      <h3 className="align-self-center border-bottom pb-3 px-5">Sign In</h3>
      <Form
        className="d-flex flex-column"
        onSubmit={(event) => event.preventDefault()}
      >
        <Form.Group className="mt-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" required></Form.Control>
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" required></Form.Control>
        </Form.Group>

        <Button
          className="mt-3 w-25 align-self-end"
          type="submit"
          variant="outline-dark"
        >
          Login
        </Button>
      </Form>
    </Login>
  );
}

export default Sign;
