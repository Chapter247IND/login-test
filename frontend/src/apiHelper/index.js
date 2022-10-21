import axios from 'axios';

let serverURl = process.env.REACT_APP_API_END_POINT;

const ApiHelper = axios.create({
  baseURL: serverURl,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token) => {
  const auth = `Bearer ${token}`;
  ApiHelper.defaults.headers.common['Authorization'] = auth;
};

const requestHandler = (request) => request;

const responseHandler = (response) => response;

const errorHandler = (error) => error;

ApiHelper.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

ApiHelper.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default ApiHelper;
