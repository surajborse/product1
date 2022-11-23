import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Spinner, Row, Col } from "react-bootstrap";
import axios from "axios";
import { MdArrowBackIosNew } from "react-icons/md";
import Layout from "../../Layout/Layout";

const CartDetails = () => {

  let baseURL = "https://api.escuelajs.co/api/v1";

  const navigate = useNavigate();

  const { id } = useParams();
  
  const [post, SetPost] = useState({});
  const [loader, setLoader] = useState(true);

  const getCartUser = async (url) => {
    try {
      const res = await axios.get(url);
      SetPost(res.data);
      setLoader(false);
    } catch (error) {
      console.error(error);
      setLoader(false);
    }
  };

  useEffect(() => {
    getCartUser(`${baseURL}/products/${id}`);
  }, []);

  return (
    <>
      <Layout>
        <div className="py-3">
          <div className="pb-3 btn-area">
            <Button
              className="blue d-flex align-items-center"
              onClick={() => navigate("/pages/carts/cart")}
            >
              <MdArrowBackIosNew className="me-1" />
              Back
            </Button>
          </div>

          {!loader && (
            <Card>
              <Row>
                <Col md={6}>
                  <Card.Img
                    variant="top"
                    src={post.images}
                    className="img-fluid p-3 pe-0"
                    alt={post.category.name}
                    width={1114}
                    height={835}
                  />
                </Col>
                <Col md={6}>
                  <Card.Body className="py-3 ps-0">
                    <h3>{post.category.name}</h3>
                    <Card.Title className="d-flex align-items-center justify-content-between gap-3">
                      <span className="mb-0">
                        {post.title ? post.title : "Loading data error"}
                      </span>
                      <p className="mb-0">
                        <span>{"$" + post.price}</span>
                      </p>
                    </Card.Title>
                    <Card.Text>{post.description}</Card.Text>
                    <div className="d-flex gap-2 flex-wrap">
                      {post.images.map((x, i) => {
                        return (
                          <Card.Img
                            key={i}
                            src={x}
                            className="img-fluid"
                            alt=""
                            style={{
                              maxWidth: "150px",
                              height: "150px",
                              width: "100%",
                            }}
                          />
                        );
                      })}
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          )}

          {loader ? (
            <Spinner className="loader" animation="border" variant="primary" />
          ) : post.length === 0 ? (
            "Data not avialable"
          ) : (
            ""
          )}
        </div>
      </Layout>
    </>
  );
};

export default CartDetails;
