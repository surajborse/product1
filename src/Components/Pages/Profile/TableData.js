import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Layout from "../../Layout/Layout";

const TableData = () => {
  // const [tableData, setTableData] = useState([]);
  const [file, setFile] = useState("");
  const [tableData, setTableData] = useState(() => {
    const savedTableData = localStorage.getItem("tableData");
    if (savedTableData) {
      return JSON.parse(savedTableData);
    } else {
      return [];
    }
  });

  const [formInputData, setformInputData] = useState({
    name: "",
    company: "",
    file: "",
    state: "",
  });

  const handleChange = (e) => {
    const newInput = (data) => ({
      ...data,
      [e.target.name]: e.target.value,
    });
    setformInputData(newInput);
  };

  const handleChangeFile = (e) => {
    // var input = document.getElementById("formFile");
    // var fReader = new FileReader();
    // fReader.readAsDataURL(input.files[0]);
    // fReader.onloadend = function (event) {
    //   var img = document.getElementById("img");
    //   img.src = event.target.result;
    //   console.log(img.src);
    // };
    setFile(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmptyInput = !Object.values(formInputData).every(
      (res) => res === ""
    );

    if (
      formInputData.name.trim() === "" ||
      formInputData.company.trim() === "" ||
      formInputData.file.trim() === "" ||
      formInputData.state.trim() === ""
    ) {
      alert("Please enter details");
    } else {
      if (checkEmptyInput) {
        const newData = (data) => [...data, formInputData];
        setTableData(newData);
        const emptyInput = {
          name: "",
          company: "",
          file: "",
          state: "",
        };

        setformInputData(emptyInput);
      }
      alert("Form Submited");
    }
  };

  // delete

  const handleDelete = (id) => {
    setTableData((tableData) => tableData.filter((items, i) => i !== id));
  };

  const handleAdd = () => {
    console.log("edits");
    // setCurrentTodo({ ...currentTodo, text: e.target.value });
    // console.log(currentTodo);
  };

  useEffect(() => {
    localStorage.setItem("tableData", JSON.stringify(tableData));
  }, [tableData]);
  return (
    <>
      <Layout>
        <div className="py-3">
          <div className="main-form w-100">
            <Form>
              <div className="form-area">
                <div className="form-head">
                  <Row>
                    <Col lg={6} md={6}>
                      <Form.Group className="pb-4" controlId="formBasicname">
                        <div className="input-effect">
                          <Form.Control
                            className="effect-17"
                            required
                            type="text"
                            name="name"
                            value={formInputData.name}
                            onChange={handleChange}
                          />
                          <Form.Label>Name </Form.Label>
                          <span className="focus-border"></span>
                        </div>
                      </Form.Group>
                    </Col>
                    <Col lg={6} md={6}>
                      <Form.Group className="pb-4" controlId="formBasicEmail">
                        <div className="input-effect">
                          <Form.Control
                            className="effect-17"
                            required
                            type="text"
                            name="company"
                            value={formInputData.company}
                            onChange={handleChange}
                          />
                          <Form.Label>Company </Form.Label>
                          <span className="focus-border"></span>
                        </div>
                      </Form.Group>
                    </Col>

                    <Col lg={6} md={6}>
                      <Form.Group controlId="formFile" className="pb-4">
                        <div className="input-effect">
                          <Form.Control
                            type="file"
                            className="effect-17 custom-file-input"
                            accept="image/*"
                            required
                            name="file"
                            value={formInputData.file}
                            onChange={handleChange}
                          />
                          <Form.Label>File chosen</Form.Label>
                          <span className="focus-border"></span>
                        </div>
                      </Form.Group>
                    </Col>

                    <Col lg={6} md={6}>
                      <Form.Group controlId="formSelect" className="pb-4">
                        <div className="input-effect select-effect">
                          <Form.Select
                            className="effect-17"
                            required
                            defaultValue={formInputData.state.defaultValue}
                            name="state"
                            value={formInputData.state}
                            onChange={handleChange}
                          >
                            <option>-Select-</option>
                            <option>Gujarat</option>
                            <option>Punjab</option>
                            <option>Maharashtra</option>
                          </Form.Select>
                          <Form.Label>State</Form.Label>
                          <span className="focus-border"></span>
                        </div>
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="btn-area pt-2 d-flex justify-content-end ">
                    <Button
                      className="blue"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            </Form>

            <div className="MuiTableContainer-root css-qa3kwx mt-5">
              <table className="MuiTable-root css-11rbhr">
                <thead>
                  <tr>
                    <th className="css-17ljlw6">
                      <div className=" css-o8bto6">
                        <div className=" css-15dzejq">
                          <span className="css-wolh4h">#ID</span>
                        </div>
                      </div>
                    </th>
                    <th className="css-17ljlw6">
                      <div className=" css-o8bto6">
                        <div className=" css-15dzejq">
                          <span className="css-wolh4h">Name</span>
                        </div>
                      </div>
                    </th>
                    <th className="css-17ljlw6">
                      <div className=" css-o8bto6">
                        <div className=" css-15dzejq">
                          <span className="css-wolh4h">Company</span>
                        </div>
                      </div>
                    </th>
                    <th className="css-17ljlw6">
                      <div className=" css-o8bto6">
                        <div className=" css-15dzejq">
                          <span className="css-wolh4h">File</span>
                        </div>
                      </div>
                    </th>
                    <th className="css-17ljlw6">
                      <div className=" css-o8bto6">
                        <div className=" css-15dzejq">
                          <span className="css-wolh4h">State</span>
                        </div>
                      </div>
                    </th>
                    <th className="css-17ljlw6">
                      <div className=" css-o8bto6">
                        <div className=" css-15dzejq">
                          <span className="css-wolh4h">Edit / Delete</span>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="css-1xnox0e">
                  {tableData.map((items, id) => {
                    return (
                      <tr className="css-1kuqfbs" key={id}>
                        <td className="css-17ljlw6" width="40">
                          <div className="css-o8bto6">
                            <div className="css-15dzejq d-flex justify-content-center">
                              <span className="css-18cs6lc">{id + 1}</span>
                            </div>
                          </div>
                        </td>
                        <td className="css-17ljlw6">
                          <div className="css-o8bto6">
                            <div className="css-15dzejq">
                              <span className="css-18cs6lc">{items.name}</span>
                            </div>
                          </div>
                        </td>
                        <td className="css-17ljlw6">
                          <div className="css-o8bto6">
                            <div className="css-15dzejq">
                              <span className="css-18cs6lc">
                                {items.company}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="css-17ljlw6">
                          <div className="css-o8bto6">
                            <div className="css-15dzejq">
                              <span className="css-18cs6lc">
                                <img
                                  src={items.file}
                                  alt="no-img"
                                  className="css-1yfwhxm"
                                  id="img"
                                />
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="css-17ljlw6">
                          <div className="css-o8bto6">
                            <div className="css-15dzejq">
                              <span className="css-18cs6lc">{items.state}</span>
                            </div>
                          </div>
                        </td>
                        <td className="css-17ljlw6" style={{ width: "182px" }}>
                          <div className="css-o8bto6">
                            <div className="css-15dzejq">
                              <div className="btn-area d-flex gap-2 ">
                                <Button
                                  className="blue"
                                  onClick={() => handleAdd(items)}
                                >
                                  Edit
                                </Button>
                                <Button
                                  className="blue"
                                  onClick={() => handleDelete(id)}
                                >
                                  Delete
                                </Button>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}

                  {tableData.length === 0 && (
                    <tr>
                      <td className="css-17ljlw6 text-center" colSpan={6}>
                        <div className=" css-o8bto6">
                          <div className=" css-15dzejq">
                            <span className="css-wolh4h">
                              Data not avialable
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default TableData;
