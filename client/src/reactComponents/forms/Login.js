import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "./AuthContext";
import { useHistory } from 'react-router-dom'
import "../formcss/login.css"

export default function Login() {
  //grabs input from the form
  const emailRef = useRef();
  const passwordRef = useRef();
  //gets values from login function (defined in AuthContext.js) & authenticates
  const { login } = useAuth();

  //error handling - starts free of errors
  const [error, setError] = useState("");
  //loading is set in state to disable button after it is clicked
  //prevents multiple users from being created accidentally
  const [loading, setLoading] = useState(false);
  
  const history = useHistory()

  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      //initial state of form - free of errors & loading form (button is enabled)
      setError("");
      setLoading(true);
      //waits for login to happen, otherwise, catch block is run and error is printed
      await login(emailRef.current.value, passwordRef.current.value);
      console.log("Login successful");
      history.push('/adminDash')
    } catch {
      setError("Login Failed");
    }
    setLoading(false);
  }

  return (
    <div className="login_container">
    <Container
      className="d-flex align-items center justify-content-center mt-5"
      style={{ minHeight: "80vh" }}
    >
      <div className="w-100" style={{ maxWidth: "420px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-2">Admin Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                Log In
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
    </div>
  );
}
