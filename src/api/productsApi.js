import axios from 'axios';

export const fetchProducts = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/products`);
  return response.data;
};
