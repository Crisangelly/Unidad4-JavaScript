import axios from "axios";
/* 
const URL_BASE = "https://api.github.com/users"; */

const URL_BASE = "https://api.github.com/users";

const API_GITHUB = axios.create({
  baseURL: URL_BASE
});

export default API_GITHUB;