import axios from "axios";

const dataUrl = "https://jsonplaceholder.typicode.com/photos";
const fetchThenRender = () => {
  return new Promise((resolve, reject) => {
    const response = axios.get(dataUrl);
    if (response) {
      resolve(response);
    } else {
      reject(new Error("fetch Error"));
    }
  });
};

export default fetchThenRender;
