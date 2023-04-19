import axios from "axios";
const API_PATH = "https://643ee816c72fda4a0b0461b4.mockapi.io/api/";
export const api = axios.create({
    baseURL: API_PATH,
});

api.defaults.headers.post["Content-Type"] = "application/json";