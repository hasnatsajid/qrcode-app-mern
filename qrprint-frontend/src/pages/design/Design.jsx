import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdOutlineDeleteOutline, MdFileCopy } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";
import { Radio, Checkbox, Button, Select, Dropdown, Menu, Space } from "antd";
import { Link } from "react-router-dom";
import { DesignArea } from "./design.style";

const Design = () => {
  const [dropValue, setDropValue] = useState("14 X 11");
  const [colorsValue, setColorsValue] = useState("White");
  const [selectValue, setSelectValue] = useState(21);
  const [imgQuality, setImgQuality] = useState(true);
  const { Option } = Select;

  const array = [
    "10 x 8 (DESK)",
    "14 X 11",
    "16 X 12",
    "20 X 16",
    "24 X 20 (CORPORATE)",
  ];

  const handleClick = ({ key, value }) => {
    setDropValue(key);
    console.log(key);
    console.log(value);
  };
  const handleColorsClick = ({ key }) => {
    setColorsValue(key);
  };
  const handleChange = (value) => {
    setSelectValue(value);
    console.log(value);
  };
  const sizesMenu = (
    <Menu onClick={handleClick}>
      {array.map((item) => (
        <Menu.Item key={item}>{item}</Menu.Item>
      ))}
    </Menu>
  );
  const colorsMenu = (
    <Menu onClick={handleColorsClick}>
      <Menu.Item key="White">White</Menu.Item>
      <Menu.Item key="Black">Black</Menu.Item>
      <Menu.Item key="Red">Red</Menu.Item>
      <Menu.Item key="Blue">Blue</Menu.Item>
      <Menu.Item key="Yellow">Yellow</Menu.Item>
    </Menu>
  );
  return (
    <>
      <DesignArea>
        <Container>
          <Row>
            <Col lg={8}>
              <div className="gallery">
                <div className="galleryHead">
                  <h1>CANVAS GALLERY</h1>
                  <div>
                    <a href="#">Edit</a>
                    <a href="#">Preview</a>
                  </div>
                </div>
                <div className="galleryImage">
                  <img src="/images/canvas-image.png" alt="click here" />
                </div>
                <div className="galleryFooter">
                  <div className="galleryButtons">
                    <Button>
                      <img src="/images/undo-icon.svg" alt="click here" />
                    </Button>
                    <Button>
                      <img src="/images/redo-icon.svg" alt="click here" />
                    </Button>
                  </div>
                  <span>Unsaved changes</span>
                  <div className="zoomButtons">
                    <div className="galleryButtons">
                      <Button style={{ marginRight: "1rem" }}>
                        <img src="/images/hand-icon.svg" alt="click here" />
                      </Button>
                    </div>
                    <div className="zoomImage">
                      <Button
                        onClick={() => {
                          if (selectValue > 0)
                            setSelectValue((prev) => prev - 1);
                        }}
                      >
                        -
                      </Button>
                      <Select value={`${selectValue}%`} onChange={handleChange}>
                        <Option value={20}>20%</Option>
                        <Option value={40}>40%</Option>
                        <Option value={60}>60%</Option>
                        <Option value={80}>80%</Option>
                        <Option value={100}>100%</Option>
                      </Select>
                      <Button
                        onClick={() => {
                          if (selectValue < 100) {
                            setSelectValue((prev) => prev + 1);
                          }
                        }}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <h5 className="productHeading">Product details</h5>
              <div className="productDetail">
                <div className="products">
                  <div className="productInfo">
                    <div className="infoHead">
                      <span>Size . {array.indexOf(dropValue) + 1}</span>
                      <Dropdown overlay={sizesMenu} trigger={["click"]}>
                        <a onClick={(e) => e.preventDefault()}>
                          <Space>
                            <span>All Sizes</span>
                            <img
                              src="/images/dropdown-icon.svg"
                              alt="click here"
                            />
                          </Space>
                        </a>
                      </Dropdown>
                    </div>
                    <div className="infoArea">
                      <img src="/images/bordered-icon.svg" alt="click here" />
                      <span>{dropValue}</span>
                    </div>
                  </div>
                  <h6 style={{ margin: "1rem 0" }}>Your design</h6>
                  <div className="productInfo">
                    <div className="infoHead">
                      <Radio className="collapseRadio">{colorsValue}</Radio>
                      <Dropdown overlay={colorsMenu} trigger={["click"]}>
                        <a onClick={(e) => e.preventDefault()}>
                          <Space>
                            <img
                              src="/images/dropdown-icon.svg"
                              alt="click here"
                            />
                          </Space>
                        </a>
                      </Dropdown>
                    </div>
                  </div>
                </div>
                <div className="printing">
                  <span style={{ marginRight: "1rem" }}>
                    Printing Settings:
                  </span>
                  <Checkbox>Print on sides</Checkbox>
                </div>
                <div className="uploadImg">
                  <div className="designImage">
                    <img src="/images/design-image.svg" alt="click here" />
                    <div className="imageName">
                      <span>qr-code.png</span>
                      {imgQuality === true ? (
                        <span style={{ color: "var(--MainColor)" }}>
                          high resolution. (Print Quality)
                        </span>
                      ) : (
                        <span style={{ color: "#f84a4a" }}>
                          Low resolution (93 DPI)
                        </span>
                      )}
                    </div>
                    <div className="imageIcons">
                      <MdFileCopy />
                      <MdOutlineDeleteOutline />
                    </div>
                  </div>
                </div>
                <Button className="addDesign">
                  <BsPlusLg />
                  <div>
                    <p>Add design</p>
                    <span>Print area size 4800 x 3600 px (300 DPI)</span>
                  </div>
                </Button>
              </div>
              <div className="addCart">
                <Link to="/cart">Add to Cart</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </DesignArea>
    </>
  );
};

export default Design;
