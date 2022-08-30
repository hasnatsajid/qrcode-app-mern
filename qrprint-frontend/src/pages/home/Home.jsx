import React from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { Card, DeliversSection, DynamicCard, GenerateBtn, HomeSection, QuantitySection, ScanDesign, ScanImage, WorkArea, WorkHeading } from './home.style';

const Home = () => {
  const cardData = [
    {
      image: 'qr-code-scanner.svg',
      heading: 'Get QR of your Credentials',
      text: 'Enter your Wi-Fi credentials (network/SSID,password)Don’t worry we do not store or share this information.Our patented QR app encodes and translates this informationno different than using a google translator.Your QR Artwork is generated.',
    },
    {
      image: 'scan-icon.svg',
      heading: 'Test your Code',
      text: 'You can test your generated QR code now.Just point your phone or tablet at your desktop screen and voila! Now you do not need to share your credentials all the time.',
    },
    {
      image: 'canvas-size-icon.svg',
      heading: 'Choose the Canvas size',
      text: 'Choose the perfect canvas size that fits that empty wall in your living room,office,hotel restaurant lobby etc.We Print each order  individually on showroom grade canvas and make sure  that your order is perfect before we send it to you.',
    },
    {
      image: 'careful-shipping-icon.svg',
      heading: 'Careful Shipping',
      text: "We'll take care of the rest. Your canvas will be crafted carefully and delivered to your door within 10 days from date ordered.",
    },
  ];
  return (
    <>
      <HomeSection>
        <Container>
          <img src="/images/hero-image.png" alt="click here" />
          <div className="share">
            <h1>Share your WIFI, without actually sharing!</h1>
            <p>Get a QR code of your WiFi credentials and free yourself from sharing information again and again.</p>
            <Link to="/generateQr">
              <GenerateBtn>Generate QR</GenerateBtn>
            </Link>
          </div>
        </Container>
      </HomeSection>
      <WorkArea>
        <WorkHeading>How it Works</WorkHeading>
        <Row gutter={[64, 0]}>
          {cardData.map((item, i) => (
            <Col lg={6} md={12} key={item.heading}>
              <Card>
                <div key={i}>
                  <div className="cardImage">
                    <img src={`/images/${item.image}`} alt="click here" />
                  </div>
                  <h5>{item.heading}</h5>
                  <p>{item.text}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </WorkArea>
      <Container>
        <DynamicCard>
          <Row className="align-items-center" gutter={[40, 100]}>
            <Col md={12}>
              <img src="/images/secure-image.png" alt="click here" />
            </Col>
            <Col md={12}>
              <h4 style={{ maxWidth: '400px' }}>Secure, No need to share your wifi credentials with anyone</h4>
            </Col>
            <Col md={12}>
              <h4>Ready to Hang</h4>
            </Col>
            <Col md={12}>
              <img src="/images/hang-image.png" alt="click here" />
            </Col>
            <Col md={12}>
              <img src="/images/custom-image.png" alt="click here" />
            </Col>
            <Col md={12}>
              <h4 style={{ maxWidth: '300px' }}>Choose the size that fits your space</h4>
            </Col>
          </Row>
        </DynamicCard>
        <ScanDesign>
          <p>We also offer a variety size to print your QR WIFI Artwork. Both small and large format sizes from desktop decor to coffee shop entry.</p>
          <GenerateBtn>Design Yours</GenerateBtn>
          <ScanImage>
            <img src="/images/scan-design-image.png" alt="click here" />
          </ScanImage>
        </ScanDesign>
        <QuantitySection>
          <a href="#">100% QUALITY GUARANTEE ON ALL PRODUCT PRINTS:</a>
          <p style={{ marginTop: '2rem' }}>
            We use industry-leading print machines and a world-class coating and finishing process; this allows us to stand 100% behind our product. We offer
            across our product lines a 100% satisfaction guarantee.
          </p>
        </QuantitySection>
      </Container>
      <DeliversSection>
        <div>
          <h2>USA PRINTED AND SHIPPED OVER 30,000 ORDERS DELIVERES</h2>
        </div>
        <div>
          <img src="/images/van.png" alt="click here" />
        </div>
      </DeliversSection>
    </>
  );
};

export default Home;
