import React, { useState } from 'react';
import { Form, Input, Select, Button, Spin } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { GenerateArea, GenerateLogo } from './generateQr.style';
import { generateQR } from '../../hooks/requests';

const GenerateQr = () => {
  const { Option } = Select;
  const [qrCode, setQrCode] = useState(0);
  const navigate = useNavigate();

  const handleCLick = () => {
    setQrCode(1);
    setTimeout(() => {
      setQrCode(2);
    }, 1500);
  };

  const onSubmitQRcode = async (values) => {
    const wifiCanvas = {
      ...values,
      hiddenSSID: false,
    };

    let res = await generateQR(wifiCanvas);

    if (res.status === true) {
      navigate('../design', { replace: true });
    }
  };

  return (
    <>
      <GenerateLogo>
        <img src="/images/LOGO.svg" alt="click here" />
      </GenerateLogo>
      <GenerateArea>
        <div className="generator">
          <p style={{ fontSize: '1.125rem' }}>Network/SSID*</p>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
            onFinish={onSubmitQRcode}
          >
            <Form.Item
              label=""
              name="ssid"
              rules={[
                {
                  required: true,
                  message: 'Please input your network SSID!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label=""
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your network password!',
                },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item
              label=""
              name="encryption"
              rules={[
                {
                  required: true,
                  message: 'Please input your network security type!',
                },
              ]}
            >
              <Select defaultValue="0">
                <Option value="0">WPA/WPA2</Option>
                <Option value="WPA">WPA</Option>
                <Option value="GSM">GSM</Option>
              </Select>
            </Form.Item>
            <div className="generateImg">{qrCode === 2 ? <img src="/images/generate-qr-code.svg" /> : qrCode === 1 ? <Spin size="large" /> : ''}</div>
            <Form.Item>
              {qrCode === 2 ? (
                <Button htmlType="submit" className="generateBtn">
                  {/* <Link to="/design"> */}
                  Create your WIFI Canvas
                  {/* </Link> */}
                </Button>
              ) : (
                <Button onClick={handleCLick} className="generateBtn">
                  Generate QR
                </Button>
              )}
            </Form.Item>
          </Form>
        </div>
      </GenerateArea>
    </>
  );
};

export default GenerateQr;
