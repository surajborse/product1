import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const SignIn = () => {
  const history = useNavigate();

  const [inpVal, setInpVal] = useState({
    email: "",
    pass: "",
  });

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

    const getUserArr = localStorage.getItem("userSignUp");

    const { email, pass } = inpVal;

    if (email.trim() === "") {
      alert("Email is required.");
    } else if (!email.includes("@")) {
      alert("Your email address is invalid.");
    } else if (pass.trim() === "") {
      alert("Password is required.");
    } else if (pass.length < 5) {
      alert("Your password should be more than 6 characters.");
    } else {
      if (getUserArr && getUserArr.length) {
        const userData = JSON.parse(getUserArr);

        const userLogin = userData.filter((elm, id) => {
          return elm.email === email && elm.pass === pass;
        });

        if (userLogin.length === 0) {
          alert("Invalid details");
        } else {
          localStorage.setItem("user_Login", JSON.stringify(userLogin));
          history("/dashboards/analytics");
          alert("User login succesfully");
        }
      }
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
                      <h3 className="">Sign in</h3>
                      <p className="m-0 px-4">
                        Enter your email and password to Sign In
                      </p>
                    </div>
                  </div>

                  <div className="form-head">
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

                    <div className="switch_box css-1ckcny justify-content-start gap-2 ">
                      <Form.Control
                        type="checkbox"
                        className="switch_1 shadow-none"
                        id="rem"
                      />
                      <span>
                        <Form.Label className="m-0" htmlFor="rem">
                          Remember me
                        </Form.Label>
                      </span>
                    </div>

                    <div className="btn-area pt-4">
                      <Button
                        className="blue w-100"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        SIGN IN
                      </Button>

                      <span className="d-flex text-center justify-content-center pt-4 ">
                        Don't have an account ?
                        <NavLink className="ms-2" to="/">
                          Sign Up
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

export default SignIn;
