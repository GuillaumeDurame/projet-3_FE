import axios from "axios";
import { API_BASE_URL } from "../const";

class ApiHandler {
  constructor() {
    this.api = axios.create({
      baseURL: API_BASE_URL
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
}

const apiHandler = new ApiHandler();

export default apiHandler;
