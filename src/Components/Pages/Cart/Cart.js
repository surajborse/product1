import React, { useContext, useEffect } from "react";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CartAdd, CartD } from "../../../App";
import Layout from "../../Layout/Layout";

const Cart = () => {
  const brokenImg =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg";

  //   const [show, setShow] = useState(false);
  //   const [modCart, setModCart] = useState([]);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  const [loader, cartData, loadMore, setLoadMore] = useContext(CartD);
  const [addCart, setAddCart] = useContext(CartAdd);

  useEffect(() => {
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
    localStorage.setItem("addCart", JSON.stringify(unique));
  }, [addCart]);

  console.log(cartData);
  return (
    <>
      <Layout>
        <div className="py-3">
          {/* <Row className={`align-items-center justify-content-center`}> */}
          <Row>
            {!loader &&
              cartData?.slice(0, loadMore).map((items, id) => {
                return (
                  <Col lg={4} md={4} sm={6} className="mb-4" key={id}>
                    {/* <Card className="h-100" onClick={() => {
                    handleShow();
                    setModCart(cartData[id]);
                  }}> */}

                    <Card className="h-100">
                      <NavLink to={`/pages/carts/cart-details/${items.id}`}>
                        <Card.Img
                          variant="top"
                          src={items.images}
                          onError={(e) => (e.target.src = brokenImg)}
                          width={330}
                          height={223}
                        />
                      </NavLink>
                      <Card.Body>
                        <div className="d-flex align-items-center justify-content-between gap-3 pb-3">
                          <Card.Title className="mb-0">
                            {items.title}
                          </Card.Title>
                          <Card.Text> {"$" + items.price} </Card.Text>
                        </div>

                        <div className="btn-area">
                          <Button
                            className="blue"
                            onClick={() => setAddCart([...addCart, items])}
                          >
                            Add To Cart
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}

            {loader ? (
              <Spinner
                className="loader"
                animation="border"
                variant="primary"
              />
            ) : cartData.length === 0 ? (
              <span className="d-block text-center"> Data Not Avialable</span>
            ) : (
              ""
            )}
          </Row>

          <div className="text-center py-3">
            <span>{cartData.length + " " + "Items"}</span>
          </div>
          {loadMore < cartData.length && (
            <div className="text-center btn-area">
              <Button
                className="darked"
                onClick={() => setLoadMore(loadMore + 48)}
              >
                Load More
              </Button>
            </div>
          )}
          {/* <ModalCart show={show} handleClose={handleClose} modCart={modCart} /> */}
        </div>
      </Layout>
    </>
  );
};

export default Cart;
