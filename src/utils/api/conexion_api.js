import axios from "axios";
import dotenv from "dotenv"

const URL_BASE = "https://api.github.com/";

const API_GITHUB = axios.create({
  baseURL: URL_BASE,
  headers: {'Authorization': dotenv.SECRET}
});

export default API_GITHUB;