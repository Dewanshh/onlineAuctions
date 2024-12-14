import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:6600/api", // Replace with your backend URL
});

export default api;
