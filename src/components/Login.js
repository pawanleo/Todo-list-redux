import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import { useHistory } from "react-router";

function Login() {
  

  const history = useHistory();

  const [state, setstate] = useState({
  Uname: '',
  pass: '',
  });
  const [errorMessage, setErrorMessage] = useState(); // Showing Error Message

  const handleChange = (event) => {
    setstate({ ...state, [event.target.name]: event.target.value });
  };
  const handleClick = () => {
    if (state.Uname === '' || state.pass === '') {

      setErrorMessage('* Empty username/password field')
  }

  else {
     
      setErrorMessage('')

     
      localStorage.setItem("token","LoggedIn")
      history.push('/todo')
  
  }
    
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit" onClick={handleClick}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
