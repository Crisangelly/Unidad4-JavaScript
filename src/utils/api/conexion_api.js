import axios from "axios";
import dotenv from "dotenv"

const URL_BASE = "https://api.github.com/";

const API_GITHUB = axios.create({
  baseURL: URL_BASE,
  headers: {'Authorization': dotenv.SECRET},
  timeout: 60000,
});

//const token = process.env.USER_SEARCH_OAUTH;
const token = null;
if (token) {
  github.defaults.headers.common.Authorization = `token ${token}`;
}

export default API_GITHUB;