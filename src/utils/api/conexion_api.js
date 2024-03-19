import axios from "axios";

const URL_BASE = import.meta.env.VITE_URL_API;
const TOKEN = import.meta.env.VITE_SECRET;

const API_GITHUB = axios.create({
  baseURL: URL_BASE,
  headers: {'Authorization': TOKEN},
  timeout: 60000,
});


export default API_GITHUB;