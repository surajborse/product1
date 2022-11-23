import React from "react";
import { Button, Card, Offcanvas } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";

const RightCanvas = ({ handleClose, show, placement, addCart, setAddCart }) => {
  const brokenImg =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg";

  const Delete = (id) => {
    const remove = addCart.filter((item) => item.id !== id);

    localStorage.setItem("addCart", JSON.stringify(addCart));
    setAddCart(remove);
  };

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement={placement}>
        <Offcanvas.Header>
          <Offcanvas.Title>Cart Details ({addCart.length})</Offcanvas.Title>
          <Button
            className="light bg-transparent p-0 rounded-0 border-0"
            onClick={() => handleClose(false)}
          >
            <FaTimes className="fs-5" />
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {addCart.map((item, id) => {
            return (
              <Card key={id} className="mb-4">
                <Card.Img
                  variant="top"
                  src={item.images}
                  onError={(e) => (e.target.src = brokenImg)}
                  width={365}
                  height={246}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text> {item.description} </Card.Text>
                  <div className="btn-area">
                    <Button className="red" onClick={() => Delete(item.id)}>
                      Remove
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default RightCanvas;
