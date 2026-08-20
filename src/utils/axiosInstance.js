import axios from "axios";
import { BASE_URL } from "./constants";

// Backend uses cookie-based auth (req.cookies.token),
// so we use withCredentials to send cookies on every request.
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default axiosInstance;