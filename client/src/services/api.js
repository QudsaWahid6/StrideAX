import axios from "axios";

const API = axios.create({
  baseURL: "https://strideax-production.up.railway.app/api",
});

export default API;
