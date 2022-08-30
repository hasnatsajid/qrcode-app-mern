const API_URL = 'http://localhost:3001';

export const generateQR = async (data) => {
  const sendQR = await fetch(`${API_URL}/api/v1/qrcode/generate`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const response = await sendQR.json();

  return response;
};

export const createOrder = async (data) => {
  const placeOrder = await fetch(`${API_URL}/api/v1/order`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const response = await placeOrder.json();

  console.log(response);
  return response;
};
