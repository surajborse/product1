import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  const history = useNavigate();

  const [inpVal, setInpVal] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [data, setData] = useState([]);
  
  const handleChange = (e) => {
    const { value, name } = e.target;

    setInpVal(() => {
      return {
        ...inpVal,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, pass } = inpVal;

    if (name.trim() === "") {
      alert("Name is required.");
    } else if (email.trim() === "") {
      alert("Email is required.");
    } else if (!email.includes("@")) {
      alert("Your email address is invalid.");
    } else if (pass.trim() === "") {
      alert("Password is required.");
    } else if (pass.length < 6) {
      alert("Your password should be more than 6 characters.");
    } else {
      alert("succesfully");
      localStorage.setItem("userSignUp", JSON.stringify([...data, inpVal]));
      history("/sign-in");
    }
  };

  return (
    <>
      <Container>
        <Row className="justify-content-center mt-5 py-5">
          <Col lg={4} md={5} sm={6}>
            <div className="main-form w-100">
              <Form>
                <div className="form-area">
                  <div className="form-top  text-center text-white">
                    <div>
                      <h3 className="">Join us today</h3>
                      <p className="m-0 px-4">
                        Enter your email and password to register
                      </p>
                    </div>
                  </div>

                  <div className="form-head">
                    <Form.Group className="pt-4" controlId="formBasicname">
                      <div className="input-effect">
                        <Form.Control
                          className="effect-17"
                          required
                          type="text"
                          name="name"
                          onChange={handleChange}
                        />
                        <Form.Label>Name </Form.Label>
                        <span className="focus-border"></span>
                      </div>
                    </Form.Group>

                    <Form.Group className="pt-4" controlId="formBasicEmail">
                      <div className="input-effect">
                        <Form.Control
                          className="effect-17"
                          required
                          type="email"
                          name="email"
                          onChange={handleChange}
                        />
                        <Form.Label>Email </Form.Label>
                        <span className="focus-border"></span>
                      </div>
                    </Form.Group>

                    <Form.Group className="pt-4" controlId="formBasicPassword">
                      <div className="input-effect">
                        <Form.Control
                          type="password"
                          className="effect-17"
                          required
                          name="pass"
                          onChange={handleChange}
                        />
                        <Form.Label>Password</Form.Label>
                        <span className="focus-border"></span>
                      </div>
                    </Form.Group>

                    <Form.Group className="pt-3" controlId="formBasicCheckbox">
                      <span>
                        <Form.Check
                          type="checkbox"
                          label="I agree the"
                          className="shadow-none"
                        />
                      </span>
                    </Form.Group>

                    <div className="btn-area pt-4">
                      <Button
                        className="blue w-100"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        SIGN IN
                      </Button>

                      <span className="d-flex text-center justify-content-center pt-4 ">
                        Already have an account ?
                        <NavLink className="ms-2" to="/sign-in">
                          Sign In
                        </NavLink>
                      </span>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
