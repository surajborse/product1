import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalLogout = ({ showModal, handleCloseModal, userLogout }) => {
  return (
    <>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        className="modal-logout"
      >
        <Modal.Body className="pb-0">
          <h3 className="text-center px-2">
            Are you sure you want to logout ?
          </h3>
        </Modal.Body>
        <Modal.Footer className="btn-area justify-content-center gap-3 border-0">
          <Button className="darked" onClick={handleCloseModal}>
            No
          </Button>
          <Button
            className="red"
            onClick={() => {
              userLogout();
              handleCloseModal();
            }}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalLogout;
