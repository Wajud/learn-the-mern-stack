import axios from "axios";

const API_URL = "/api/users/";

// Register user
const register = async (userData) => {
  const response = axios.post(API_URL, userData);

  const data = await (await response).data;

  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }

  return data;
};

const logout = () => {
  localStorage.removeItem("user");
};

//Login user
const login = async (userData) => {
  const response = axios.post(API_URL + "login", userData);

  const data = await (await response).data;

  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }

  return data;
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
