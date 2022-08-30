import { Button, Form, Input } from "antd";
import React from "react";
import { TrackArea, Tracker } from "./trackOrder.style";

const TrackOrder = () => {
  return (
    <>
      <TrackArea>
        <Tracker>
          <h1 style={{ marginBottom: "5rem" }}>Track Order</h1>
          <p>Enter the code we send you in email and track your order.</p>
          <Form
            name="trackerForm"
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Form.Item
              label=""
              name="code"
              rules={[
                {
                  required: true,
                  message: "Please input your Code!",
                },
              ]}
            >
              <Input placeholder="EnterCode" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">Track My Order</Button>
            </Form.Item>
          </Form>
        </Tracker>
      </TrackArea>
    </>
  );
};

export default TrackOrder;
