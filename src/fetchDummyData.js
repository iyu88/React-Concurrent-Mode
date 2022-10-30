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
        throw response;
      default:
        return response;
    }
  };

  return { read };
};

const fetchDummyData = () => {
  const requestURL = "https://jsonplaceholder.typicode.com/photos";
  try {
    const response = axios.get(requestURL);
    return wrapPromise(response);
  } catch (err) {
    console.log(err);
  }
};

export default fetchDummyData;
