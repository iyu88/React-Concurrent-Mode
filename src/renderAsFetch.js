import axios from "axios";

const wrapPromise = (promise) => {
  let status = "pending";
  let response;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response.data;
      default:
        return response.data;
    }
  };

  return { read };
};

const renderAsFetch = (path) => {
  const requestURL = "https://jsonplaceholder.typicode.com/";
  try {
    const response = axios.get(requestURL + path);
    return wrapPromise(response);
  } catch (err) {
    console.log(err);
  }
};

export default renderAsFetch;
