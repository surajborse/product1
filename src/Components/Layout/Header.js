import React, { useContext, useEffect, useState } from "react";
import { Badge, Button } from "react-bootstrap";
import { BiMenu } from "react-icons/bi";
import { MdMenuOpen } from "react-icons/md";
import { IoMdSettings, IoMdNotifications } from "react-icons/io";
import { BsCartFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import Rightbar from "../Modals/Rightbar";
import { CartAdd, LayoutArea } from "../../App";
import { NavLink, useNavigate } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs";
import RightCanvas from "../Modals/RightCanvas";
import { RiLogoutCircleRFill } from "react-icons/ri";
import ModalLogout from "../Modals/ModalLogout";

const Header = () => {
  const history = useNavigate();

  // layout
  const [toggle, setToggle] = useContext(LayoutArea);
  const [right, setRight] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [checked, setChecked] = useState(true);

  // canvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // modal
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  // cart add
  const [addCart, setAddCart] = useContext(CartAdd);

  // unique array
  const uniqueIds = [];

  const unique = addCart.filter((element) => {
    const isDuplicate = uniqueIds.includes(element.id);

    if (!isDuplicate) {
      uniqueIds.push(element.id);
      return true;
    }
    return false;
  });

  // logout
  const userLogout = () => {
    localStorage.removeItem("user_Login");
    history("/");
  };

  // scroll header
  window.addEventListener("scroll", () => {
    setScroll(window.scrollY > 40);
  });

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("addCart"));
    if (items) {
      setAddCart(items);
    }
  }, []);
  return (
    <>
      <header className={`${!scroll || !checked ? "" : "header-scroll"}`}>
        <div className="sub-header">
          <div className="bread-area gap-5">
            <div className="mr-0">
              <Breadcrumbs />
            </div>

            <Button
              className="bg-transparent p-0 rounded-0 border-0"
              onClick={() => setToggle(!toggle)}
            >
              {!toggle ? (
                <BiMenu className="fs-4 menubi" />
              ) : (
                <MdMenuOpen className="fs-4 menubi" />
              )}
            </Button>
          </div>
          <div className="d-flex align-items-center gap-3">
            <Button className="light bg-transparent p-0 rounded-0 border-0">
              <NavLink to="/" className="light">
                <FaUserCircle className="fs-5" />
              </NavLink>
            </Button>
            <Button
              className="light bg-transparent p-0 rounded-0 border-0"
              onClick={() => setRight(true)}
            >
              <IoMdSettings className="fs-5" />
            </Button>
            <Button
              title="notification"
              className="light bg-transparent p-0 rounded-0 border-0"
              // onClick={() => setRight(true)}
            >
              <IoMdNotifications className="fs-5" />
            </Button>

            <Button
              title="cart"
              className="light bg-transparent position-relative p-0 border-0 d-flex align-items-center gap-1"
              onClick={handleShow}
            >
              <BsCartFill />
              <span
                style={{
                  fontSize: "12px",
                }}
              >
                ({unique.length})
              </span>
            </Button>

            <Button
              title="logout"
              className="light p-0 rounded-0 border-0 bg-transparent fs-5"
              onClick={handleShowModal}
            >
              <RiLogoutCircleRFill />
            </Button>
          </div>
        </div>
      </header>

      <Button className="btn css-fxid9l" onClick={() => setRight(true)}>
        <IoMdSettings className="fs-5" />
      </Button>

      <Rightbar
        right={right}
        setRight={setRight}
        scroll={scroll}
        setScroll={setScroll}
        checked={checked}
        setChecked={setChecked}
      />

      <RightCanvas
        show={show}
        handleClose={handleClose}
        placement="end"
        addCart={unique}
        setAddCart={setAddCart}
      />

      <ModalLogout
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        userLogout={userLogout}
      />
    </>
  );
};

export default Header;
