import axios from "axios";
import { serviceUrl } from "./serviceUrl";
/**
 * Create an Axios Client with defaults
 */
const client = () => {
  const headers = {
    "Content-Type": "application/json",
  };

  const api = axios.create({
    baseURL: serviceUrl.baseURL,
    // timeout: 1500,
    headers,
    withCredentials: true,
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return api;
};
/**
 * Request Wrapper with default success/error actions
 */
export const apiCall = function (
  method,
  route,
  body = null,
) {
  const onSuccess = function (response) {
    console.debug("Request Successful!", response);
    return response.data;
  };

  const onError = function (error) {
    console.error("Request Failed:", error.config);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
      console.error("Headers:", error.response.headers);
    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.error("Error Message:", error.message);
    }

    return Promise.reject(error.response || error.message);
  };

  let appData = {
    method,
    url: route,
    data: body,
  };

  if (method === "GET" && body) {
    appData.params = body;
  }

  const app = client();

  return app(appData).then(onSuccess).catch(onError);
};
