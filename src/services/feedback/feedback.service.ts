import axios from 'axios';

export const submitFeedbackForm = async (data: unknown) => {
  const result = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/feedback`, data);
  return result.data;
};
