import React from 'react';
import { Button, Input, Form } from 'antd';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartArea } from './cart.style';
import { createOrder } from '../../hooks/requests';

const Cart = () => {
  const onPlacingOrder = async (values) => {
    console.log(values);

    const res = await createOrder(values);
    console.log(res);
  };

  return (
    <>
      <CartArea>
        <Container>
          <Form
            name="cart"
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
            onFinish={onPlacingOrder}
          >
            <Row>
              <Col lg={8}>
                <div className="payMethods">
                  <h2>Pay with</h2>
                  <div className="payButtons">
                    <a href="#">
                      <img src="/images/shop-pay.png" alt="click here" />
                    </a>
                    <a href="#">
                      <img src="/images/pay-pal.png" alt="click here" />
                    </a>
                    <a href="#">
                      <img src="/images/google-pay.png" alt="click here" />
                    </a>
                  </div>
                </div>
                <div className="contactInfo">
                  <Row>
                    <Col md={12}>
                      <h4 style={{ marginBottom: '0' }}>Contact Information</h4>
                      <Form.Item
                        label=""
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your Email!',
                          },
                        ]}
                      >
                        <Input placeholder="Email" />
                      </Form.Item>
                    </Col>
                    <h4 style={{ margin: '0.5rem 0 0' }}>Shipping Address</h4>
                    <Col md={6}>
                      <Form.Item
                        label=""
                        name="firstName"
                        rules={[
                          {
                            required: true,
                            message: 'Please input first name!',
                          },
                        ]}
                      >
                        <Input placeholder="First Name" />
                      </Form.Item>
                    </Col>
                    <Col md={6}>
                      <Form.Item
                        label=""
                        name="lastName"
                        rules={[
                          {
                            required: true,
                            message: 'Please input last name!',
                          },
                        ]}
                      >
                        <Input placeholder="Last Name" />
                      </Form.Item>
                    </Col>
                    <Col md={12}>
                      <Form.Item
                        label=""
                        name="address"
                        rules={[
                          {
                            required: true,
                            message: 'Please input Address!',
                          },
                        ]}
                      >
                        <Input placeholder="Address" />
                      </Form.Item>
                    </Col>
                    <Col md={4}>
                      <Form.Item
                        label=""
                        name="country"
                        rules={[
                          {
                            required: true,
                            message: 'Please input Country!',
                          },
                        ]}
                      >
                        <Input placeholder="Country/Region" />
                      </Form.Item>
                    </Col>
                    <Col md={4}>
                      <Form.Item
                        label=""
                        name="state"
                        rules={[
                          {
                            required: true,
                            message: 'Please input State!',
                          },
                        ]}
                      >
                        <Input placeholder="State/Territory" />
                      </Form.Item>
                    </Col>
                    <Col md={4}>
                      <Form.Item
                        label=""
                        name="zipCode"
                        rules={[
                          {
                            required: true,
                            message: 'Please input Zip Code!',
                          },
                        ]}
                      >
                        <Input placeholder="Postcode" />
                      </Form.Item>
                    </Col>
                    <Col md={12}>
                      <Form.Item
                        label=""
                        name="phone"
                        rules={[
                          {
                            required: true,
                            message: 'Please input Phone number!',
                          },
                        ]}
                      >
                        <Input placeholder="Phone" />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={4}>
                <div className="results">
                  <div className="designs">
                    <div className="designContent">
                      <img src="/images/qr-code-scanner.svg" alt="click here" />
                      <span>Design # 1</span>
                      <span>$ 99.99</span>
                    </div>
                    <div className="designContent">
                      <img src="/images/qr-code-scanner.svg" alt="click here" />
                      <span>Design # 1</span>
                      <span>$ 99.99</span>
                    </div>
                  </div>
                  <div className="discount">
                    <Input placeholder="Gift card or discount code" />
                    <Button>Apply</Button>
                  </div>
                  <div className="subTotal">
                    <span>Subtotal</span>
                    <span>$ 199.98</span>
                  </div>
                  <div className="shipping">
                    <span>Shipping</span>
                    <span>$ 10</span>
                  </div>
                  <div className="total">
                    <div>
                      <h6>Total</h6>
                      <Form.Item
                        label=""
                        name="amount"
                        rules={[
                          {
                            // required: true,
                          },
                        ]}
                      >
                        <p>$209.98</p>
                      </Form.Item>
                    </div>
                    <span>including $ 18.18 in taxes</span>
                  </div>
                </div>
              </Col>
              <Col lg={8}>
                <div className="order">
                  <Link to="/design">Return to cart</Link>
                  {/* <Link to="/order"> */}

                  <Button htmlType="submit">Place Order</Button>
                  {/* </Link> */}
                </div>
              </Col>
            </Row>
          </Form>
        </Container>
      </CartArea>
    </>
  );
};

export default Cart;
