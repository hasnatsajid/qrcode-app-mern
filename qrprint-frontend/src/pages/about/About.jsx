import React from "react";
import { Col, Row } from "antd";
import { Container } from "react-bootstrap";
import { AboutArea, AboutImage, AboutInfo } from "./about.style";

const About = () => {
  return (
    <>
      <Container>
        <AboutArea>
          <Row gutter={0} className="align-items-center">
            <Col md={12} className="mx-md-0 mx-auto">
              <AboutInfo>
                <h1 style={{ marginBottom: "3rem" }}>
                  We make WIFI Sharing Easy.
                </h1>
                <p>
                  Turning your WIFI into ready-to-hang scannable art.Turning
                  your WIFI into ready-to-hang scannable art.Turning your WIFI
                  into ready-to-hang scannable art.
                </p>
                <p>
                  Turning your WIFI into ready-to-hang scannable art.Turning
                  your WIFI into ready-to-hang scannable art.
                </p>
                <p>Turning your WIFI into ready-to-hang scannable art.</p>
              </AboutInfo>
            </Col>
            <Col md={12}>
              <AboutImage>
                <img src="/images/connect.png" />
              </AboutImage>
            </Col>
          </Row>
        </AboutArea>
      </Container>
    </>
  );
};

export default About;
