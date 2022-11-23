import React, { useContext } from "react";
import { Accordion } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { MdDashboard, MdOutlineDashboard } from "react-icons/md";
import { RiGalleryFill } from "react-icons/ri";
import { LayoutArea } from "../../App";
import { routes } from "../Utils";

const Sidebar = () => {
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
      <div
        className={`${
          !toggle ? "" : "sidebar-small"
        } sidebar ${bgColor} ${sideNavColor}`}
        onMouseEnter={() => setToggle(false)}
      >
        <div className="side-title">
          <MdOutlineDashboard className="text-white fs-4" />
          <h6 className={`${!toggle ? "" : "opacity-0"} `}>Dashboard PRO</h6>
        </div>
        <hr className="hr" />

        <Accordion defaultActiveKey="">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <div className="head">
                <img src="../images/team-3.jpg" alt="" />
                <p>Brooklyn Alice</p>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <ul className="css-1c1moa3">
                <NavLink to="/">
                  <li>
                    <span>M</span>
                    <span>My Profile</span>
                  </li>
                </NavLink>

                <NavLink to="/">
                  <li>
                    <span>S</span>
                    <span>Settings</span>
                  </li>
                </NavLink>

                <NavLink to="/">
                  <li>
                    <span>L</span>
                    <span>Logout</span>
                  </li>
                </NavLink>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <hr className="hr" />
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <div className="head">
                <span>
                  <MdDashboard />
                </span>
                <p>Dashboards</p>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <ul className="css-1c1moa3">
                <NavLink to="/dashboards/analytics">
                  <li>
                    <span>A</span>
                    <span>{routes.analytics.name}</span>
                  </li>
                </NavLink>

                <NavLink to="/dashboards/sales">
                  <li>
                    <span>S</span>
                    <span>{routes.sales.name}</span>
                  </li>
                </NavLink>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <span className="pages-for">Pages</span>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <div className="head">
                <span>
                  <RiGalleryFill />
                </span>
                <p>Pages</p>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <ul className="css-1c1moa3">
                <Accordion>
                  <Accordion.Item eventKey="00">
                    <Accordion.Header>
                      <ul className="css-1c1moa3 p-0 w-100 m-0">
                        <li className="py-3">
                          <span>P</span>
                          <span>Profile</span>
                        </li>
                      </ul>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul className="css-1c1moa3 p-0">
                        <NavLink to="/profile-overview">
                          <li>
                            <span>P</span>
                            <span>Profile Overview</span>
                          </li>
                        </NavLink>

                        <NavLink to="/pages/profile/table-data">
                          <li>
                            <span>T</span>
                            <span>Table Data</span>
                          </li>
                        </NavLink>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="11">
                    <Accordion.Header>
                      <ul className="css-1c1moa3 p-0 w-100 m-0">
                        <li className="py-3">
                          <span>U</span>
                          <span>Users</span>
                        </li>
                      </ul>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul className="css-1c1moa3 p-0">
                        <NavLink to="/pages/users/new-user">
                          <li>
                            <span>N</span>
                            <span>New User</span>
                          </li>
                        </NavLink>
                        <NavLink to="/">
                          <li>
                            <span>S</span>
                            <span>Sign Up</span>
                          </li>
                        </NavLink>
                        <NavLink to="/sign-in">
                          <li>
                            <span>S</span>
                            <span>Sign In</span>
                          </li>
                        </NavLink>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="22">
                    <Accordion.Header>
                      <ul className="css-1c1moa3 p-0 w-100 m-0">
                        <li className="py-3">
                          <span>C</span>
                          <span>Carts</span>
                        </li>
                      </ul>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul className="css-1c1moa3 p-0">
                        <NavLink to="/pages/carts/cart">
                          <li>
                            <span>C</span>
                            <span>Cart</span>
                          </li>
                        </NavLink>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default Sidebar;
