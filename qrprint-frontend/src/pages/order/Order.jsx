import React from "react";
import { OrderArea, OrderImage, OrderText } from "./order.style";

const Order = () => {
  return (
    <>
      <OrderArea>
        <OrderImage src="/images/design-image.svg" alt="click here" />
        <OrderText>Your order has been placed successfully.</OrderText>
      </OrderArea>
    </>
  );
};

export default Order;
