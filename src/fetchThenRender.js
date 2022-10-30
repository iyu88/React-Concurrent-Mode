import axios from "axios";

const dataUrl = "https://jsonplaceholder.typicode.com/";
const fetchThenRender = (path) => {
  return new Promise((resolve, reject) => {
    const response = axios.get(dataUrl + path);
    if (response) {
      resolve(response);
    } else {
      reject(new Error("fetch Error"));
    }
  });
};

export default fetchThenRender;
