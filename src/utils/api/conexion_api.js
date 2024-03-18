import axios from "axios";

const URL_BASE = import.meta.env.VITE_URL_API;
const TOKEN = import.meta.env.VITE_SECRET;

const API_GITHUB = axios.create({
  baseURL: URL_BASE,
  headers: {'Authorization': TOKEN},
  timeout: 60000,
});

//const token = process.env.USER_SEARCH_OAUTH;
const token = null;
if (token) {
  github.defaults.headers.common.Authorization = `token ${token}`;
}

export default API_GITHUB;