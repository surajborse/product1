import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../Layout/Layout";
import { toast } from "react-toastify";

const NewUser = () => {
  const [step, setStep] = useState(0);
  const [error, setError] = useState('');

  // const [showPass, setShowPass] = useState(true);
  // const [showPassConfm, setShowPassConfm] = useState(true);

  const [inpVal, setInpVal] = useState({
    first_name: "",
    last_name: "",
    company: "",
    email: "",
    pass: "",
    reap_pass: "",
    address_1: "",
    address_2: "",
    city: "",
    state: "",
    zip: "",
    twit_handle: "",
    face_acc: "",
    insta_acc: "",
    pub_email: "",
    bio: ""
  });

  // const [data, setData] = useState([]);

  const handleData = (e) => {
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

    const {
      first_name,
      last_name,
      email,
      pass,
      reap_pass,
      address_1,
      city,
      zip,
      twit_handle
    } = inpVal;

    if (step === 0) {
      if (first_name.trim() === "") {
        alert("First name is required.");
      } else if (last_name.trim() === "") {
        alert("Last name is required. ");
      } else if (email.trim() === "") {
        alert("Email address is required ");
      } else if (!email.includes("@")) {
        alert("Your email address is invalid.");
      } else if (pass.trim() === "") {
        alert("Password is required.");
      } else if (pass.length < 5) {
        alert("Your password should be more than 6 characters.");
      } else if (reap_pass.trim() === "") {
        alert("Password is required.");
      } else if (pass !== reap_pass) {
        alert("Your password doesn't match.");
      } else {
        setStep(1);
      }
    }

    if (step === 1) {
      if (address_1.trim() === "") {
        alert("Address is required ");
      } else if (city.trim() === "") {
        alert("City is required ");
      } else if (zip.trim() === "") {
        alert("zip is required ");
      } else {
        setStep(2);
      }
    }

    if (step === 2) {
      if (twit_handle.trim() === "") {
        alert("Twitter handle is required ");
      } else {
        setStep(3);
        console.log(inpVal);
      }
    }



  };

  return (
    <>
      <Layout>
        <div className="parent-height">
          <Container>
            <div className="main-form">
              <Form>
                <div className="form-area">
                  <div className="form-top">
                    <div className="round-de">
                      <span
                        className={`${step !== 0 ? '' : 'active'}`}>USER INFO</span>
                    </div>
                    <div className="round-de">
                      <span
                        className={`${step !== 1 ? '' : 'active'}`}>ADDRESS</span>
                    </div>
                    <div className="round-de">
                      <span
                        className={`${step !== 2 ? '' : 'active'}`}>SOCIAL</span>
                    </div>
                    <div className="round-de">
                      <span className={`${step !== 3 ? '' : 'active'}`}>PROFILE</span>
                    </div>
                  </div>

                  <div className="form-head">
                    <h5>
                      {
                        (step === 0 && 'About me') ||
                        (step === 1 && 'Address') ||
                        (step === 2 && 'Social') ||
                        (step === 3 && 'Profile')
                      }
                    </h5>
                    {step === 0 && <span>Mandatory informations</span>}


                    <div className="">

                      {
                        (step === 0 &&
                          <Row>
                            <Col lg={6} className='pt-4'>
                              <Form.Group>
                                <div className="input-effect">
                                  <Form.Control className="effect-17" type="text" required name="first_name"
                                    onChange={handleData} />
                                  <Form.Label>First Name</Form.Label>
                                  <span className="focus-border"></span>
                                </div>
                                {/* {
                                inpVal.first_name.trim() === "" ?
                                  <Form.Text className="text-muted">First name is required. </Form.Text> : ''
                              } */}
                              </Form.Group>
                            </Col>

                            <Col lg={6} className='pt-4'>
                              <Form.Group>
                                <div className="input-effect">
                                  <Form.Control className="effect-17" type="text" required name="last_name"
                                    onChange={handleData} />
                                  <Form.Label>Last Name</Form.Label>
                                  <span className="focus-border"></span>
                                </div>
                                {/* {
                                inpVal.last_name.trim() === "" &&
                                <Form.Text className="text-muted">{error} </Form.Text>
                              } */}
                              </Form.Group>
                            </Col>

                            <Col lg={6} className='pt-4'>
                              <Form.Group>
                                <div className="input-effect">
                                  <Form.Control className="effect-17" type="text" required name="company"
                                    onChange={handleData} />
                                  <Form.Label>Company</Form.Label>
                                  <span className="focus-border"></span>
                                </div>
                              </Form.Group>
                            </Col>

                            <Col lg={6} className='pt-4'>
                              <Form.Group>
                                <div className="input-effect">
                                  <Form.Control className="effect-17" type="email" required name="email"
                                    onChange={handleData} />
                                  <Form.Label>Email Address</Form.Label>
                                  <span className="focus-border"></span>
                                </div>
                                {/* {
                                inpVal.email.trim() === "" &&
                                <Form.Text className="text-muted">{error} </Form.Text>
                              } */}
                              </Form.Group>
                            </Col>

                            <Col lg={6} className='pt-4'>
                              <Form.Group>
                                <div className="input-effect">
                                  <Form.Control className="effect-17" type="password" required name="pass"
                                    onChange={handleData} />
                                  <Form.Label>Password </Form.Label>
                                  <span className="focus-border"></span>
                                </div>
                                {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                              </Form.Text> */}
                              </Form.Group>
                            </Col>

                            <Col lg={6} className='pt-4'>
                              <Form.Group>
                                <div className="input-effect">
                                  <Form.Control className="effect-17" type="password" required name="reap_pass"
                                    onChange={handleData} />
                                  <Form.Label>Repeat Password </Form.Label>
                                  <span className="focus-border"></span>
                                </div>
                                {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                              </Form.Text> */}
                              </Form.Group>
                            </Col>
                          </Row>) ||

                        (step === 1 &&
                          <Row>
                            <Col lg={12} className='pt-4'>
                              <Form.Group>
                                <div className="input-effect">
                                  <Form.Control className="effect-17" type="text" required name="address_1"
                                    onChange={handleData} />
                                  <Form.Label>Address 1</Form.Label>
                                  <span className="focus-border"></span>
                                </div>
                                {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                              </Form.Text> */}
                              </Form.Group>
                            </Col>

                            <Col lg={12} className='pt-4'>
                              <Form.Group>
                                <div className="input-effect">
                                  <Form.Control className="effect-17" type="text" required name="address_2"
                                    onChange={handleData} />
                                  <Form.Label>Address 2</Form.Label>
                                  <span className="focus-border"></span>
                                </div>
                              </Form.Group>
                            </Col>

                            <Col lg={6} className='pt-4'>
                              <Form.Group>
                                <div className="input-effect">
                                  <Form.Control className="effect-17" type="text" required name="city"
                                    onChange={handleData} />
                                  <Form.Label>City</Form.Label>
                                  <span className="focus-border"></span>
                                </div>
                                {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                              </Form.Text> */}
                              </Form.Group>
                            </Col>

                            <Col lg={3} className='pt-4'>
                              <div className="input-effect select-effect">
                                <Form.Select className="effect-17" required name="state"
                                  onChange={handleData} >
                                  <option value="0"></option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </Form.Select>
                                <Form.Label>State</Form.Label>
                                <span className="focus-border"></span>
                              </div>
                            </Col>

                            <Col lg={3} className='pt-4'>
                              <Form.Group>
                                <div className="input-effect">
                                  <Form.Control className="effect-17" type="number" required name="zip"
                                    onChange={handleData} />
                                  <Form.Label>Zip</Form.Label>
                                  <span className="focus-border"></span>
                                </div>
                                {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                              </Form.Text> */}
                              </Form.Group>
                            </Col>
                          </Row>) ||

                        (step === 2 &&
                          <Row>
                            <Col lg={12} className='pt-4'>
                              <Form.Group>
                                <div className="input-effect">
                                  <Form.Control className="effect-17" type="text" required name="twit_handle"
                                    onChange={handleData} />
                                  <Form.Label>Twitter Handle</Form.Label>
                                  <span className="focus-border"></span>
                                </div>
                                {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                              </Form.Text> */}
                              </Form.Group>
                            </Col>

                            <Col lg={12} className='pt-4'>
                              <Form.Group>
                                <div className="input-effect">
                                  <Form.Control className="effect-17" type="text" required name="face_acc"
                                    onChange={handleData} />
                                  <Form.Label>Facebook Account</Form.Label>
                                  <span className="focus-border"></span>
                                </div>
                              </Form.Group>
                            </Col>

                            <Col lg={12} className='pt-4'>
                              <Form.Group>
                                <div className="input-effect">
                                  <Form.Control className="effect-17" type="text" required name="insta_acc"
                                    onChange={handleData} />
                                  <Form.Label>Instagram Account</Form.Label>
                                  <span className="focus-border"></span>
                                </div>
                              </Form.Group>
                            </Col>
                          </Row>) ||

                        (step === 3 &&
                          <Row>
                            <Col lg={12} className='pt-4'>
                              <Form.Group>
                                <div className="input-effect">
                                  <Form.Control className="effect-17" type="email" required name="pub_email"
                                    onChange={handleData} />
                                  <Form.Label>Public Email</Form.Label>
                                  <span className="focus-border"></span>
                                </div>
                              </Form.Group>
                            </Col>

                            <Col lg={12} className='pt-4'>
                              <Form.Group>
                                <div className="input-effect ">
                                  <Form.Control as="textarea" style={{ height: '100px' }} className="effect-17" required name="bio"
                                    onChange={handleData} />
                                  <Form.Label>Bio</Form.Label>
                                  <span className="focus-border"></span>
                                </div>
                              </Form.Group>
                            </Col>


                          </Row>)
                      }

                      <div
                        className={`btn-area pt-4 d-flex  ${step !== 0 ? 'justify-content-between' : 'justify-content-end'}`}>
                        {
                          step !== 0 &&
                          <Button type="button" className="back"
                            onClick={() => setStep(step - 1)}
                          >back</Button>
                        }

                        <Button type="button" className="next"
                          onClick={handleSubmit}
                        > {step !== 3 ? 'next' : 'submit'}</Button>

                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </Container>
        </div>


      </Layout>
    </>
  );
};

export default NewUser;

