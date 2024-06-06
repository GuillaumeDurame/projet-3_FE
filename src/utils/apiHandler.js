import axios from "axios";
import { API_BASE_URL } from "../const";

class ApiHandler {
  constructor() {
    this.api = axios.create({
      baseURL: API_BASE_URL,
    });

    this.api.interceptors.request.use(
      (config) => {
        const authToken = localStorage.getItem("authToken");

        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }

        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
  }

  login(creadentials) {
    return this.api.post("/users/login", creadentials);
  }

  signup(data) {
    return this.api.post("/users/signup", data);
  }

  getUser() {
    return this.api.get("/users/me");
  }

  addToWishlist(elementCollection, elementId) {
    return this.api.put("/whishlist", { elementCollection, elementId });
  }
  
  getWishlist() {
    return this.api.get("/wishlist");
  }

  removeFromWishlist(elementCollection, elementId) {
    return this.api.put("/wishlist/remove", { elementCollection, elementId });
  }

  clearWishlist() {
    return this.api.delete("/wishlist/all");
  }
}

const apiHandler = new ApiHandler();

export default apiHandler;
