import axios from "axios";
const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["X-auth-token"] = `Bearer ${token}`;
} else {
  delete axios.defaults.headers.common["X-auth-token"];
}
const instance = axios.create({
  baseURL: "http://localhost:8080",
  headers: { "Content-Type": "application/json" },
});
export const userInstance = axios.create({
  baseURL: `http://localhost:8080/users`,
});
export const userLogInstance = axios.create({
  baseURL: `http://localhost:8080/user`,
});
export const productInstance = axios.create({
  baseURL: "http://localhost:8080/admine/products",
});
export const admineProductInstance = axios.create({
  baseURL: "http://localhost:8080/admine/products",
});
export default instance;
