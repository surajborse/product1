import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { LayoutArea } from "../../App";

const Rightbar = ({ right, setRight, checked, setChecked }) => {
  // const [active, setActive] = useState();

  // layout
  const [
    toggle,
    setToggle,
    bgColor,
    setBgColor,
    sideNavColor,
    setSideNavColor,
  ] = useContext(LayoutArea);

  return (
    <>
      <div className={`${!right ? "" : "end-0"} rightbar`}>
        <div>
          <div className=" css-1c4r5ba">
            <div className=" css-1ircn5c">
              <h5 className="MuiTypography-root MuiTypography-h5 css-4m3uy2">
                Material UI Configurator
              </h5>
              <p className="MuiTypography-root MuiTypography-body2 css-10hksn">
                See our dashboard options.
              </p>
            </div>
            <Button
              className="light bg-transparent p-0 rounded-0 border-0"
              onClick={() => setRight(false)}
            >
              <FaTimes className="fs-5" />
            </Button>
          </div>

          <hr className="css-2hb8f" />

          <div className="css-ura2dy">
            <div className=" css-1ircn5c">
              <h6 className="css-1jcmgjt mb-1">Sidenav Colors</h6>

              <button
                className={`btn-color css-1brhakn ${
                  sideNavColor !== "crimsonSidenav" ? "" : "active"
                } `}
                onClick={() => {
                  setSideNavColor("crimsonSidenav");
                }}
              />

              <button
                className={`btn-color css-1fwrrhp ${
                  sideNavColor !== "darkSidenav" ? "" : "active"
                } `}
                onClick={() => {
                  setSideNavColor("darkSidenav");
                }}
              />

              <button
                className={`btn-color css-y2tajl ${
                  sideNavColor !== "skySidenav" ? "" : "active"
                }`}
                onClick={() => {
                  setSideNavColor("skySidenav");
                }}
              />

              <button
                className={`btn-color css-13upgrj ${
                  sideNavColor !== "greenSidenav" ? "" : "active"
                }`}
                onClick={() => {
                  setSideNavColor("greenSidenav");
                }}
              />

              <button
                className={`btn-color css-1pmfmgk ${
                  sideNavColor !== "orangeSidenav" ? "" : "active"
                }`}
                onClick={() => {
                  setSideNavColor("orangeSidenav");
                }}
              />

              <button
                className={`btn-color css-18mm56j ${
                  sideNavColor !== "firebrickSidenav" ? "" : "active"
                }`}
                onClick={() => {
                  setSideNavColor("firebrickSidenav");
                }}
              />
            </div>

            <div className=" css-127k1no pb-3">
              <h6 className=" MuiTypography-h6 css-1jcmgjt">Sidenav Type</h6>
              <span className="  css-18rmxgd">
                Choose between different sidenav types.
              </span>
              <div className=" css-22ksfj me-0">
                <button
                  className={`${
                    bgColor !== "dark" ? "" : "active"
                  }  css-1kcxrzw`}
                  onClick={() => {
                    setBgColor("dark");
                    // setActive(event.target.id);
                  }}
                >
                  Dark
                </button>

                <div className=" css-e8slic">
                  <button
                    // key={2}
                    // id={"2"}
                    // className={`${active === "2" ? "active" : ""} css-1kcxrzw`}
                    className={`${
                      bgColor !== "bg-transparent" ? "" : "active"
                    }  css-1kcxrzw`}
                    onClick={(event) => {
                      setBgColor("bg-transparent");
                      // setActive(event.target.id);
                    }}
                  >
                    Transparent
                  </button>
                </div>
                <button
                  // key={3}
                  // id={"3"}
                  // className={`${active === "3" ? "active" : ""} css-1kcxrzw`}
                  className={`${
                    bgColor !== "bg-white" ? "" : "active"
                  }  css-1kcxrzw`}
                  onClick={(event) => {
                    setBgColor("bg-white");
                    // setActive(event.target.id);
                  }}
                >
                  White
                </button>
              </div>
            </div>

            <div className=" css-1ckcny">
              <h6 className=" MuiTypography-h6 css-1jcmgjt">Navbar Fixed</h6>
              <div className="switch_box">
                <input
                  type="checkbox"
                  className="switch_1"
                  defaultChecked={checked}
                  onChange={() => setChecked(!checked)}
                />
              </div>
            </div>
            <hr className="css-2hb8f" />

            <div className=" css-1ckcny">
              <h6 className=" MuiTypography-h6 css-1jcmgjt">Sidenav Mini</h6>
              <div className="switch_box">
                <input
                  type="checkbox"
                  className="switch_1"
                  checked={toggle ? checked : ""}
                  onChange={() => setToggle(!toggle)}
                />
              </div>
            </div>
            <hr className="css-2hb8f" />

            <div className=" css-1ckcny">
              <h6 className=" MuiTypography-h6 css-1jcmgjt">Light / Dark</h6>
              <div className="switch_box">
                <input type="checkbox" className="switch_1" />
              </div>
            </div>
            <hr className="css-2hb8f" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightbar;
