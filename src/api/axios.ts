import Axios from "axios";

import { API_BASE_URL } from "./consts";

const axios = Axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axios;
