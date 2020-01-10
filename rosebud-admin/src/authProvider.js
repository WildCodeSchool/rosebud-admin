import axios from "axios";

const authProvider = {
  login: ({ username, password }) => {
    console.log(username, password);
    return axios.post("api/v1/admin/login", { username, password });
  },
  logout: params => Promise.resolve(),
  checkAuth: () =>
    localStorage.getItem("token") ? Promise.resolve() : Promise.reject(),
  checkError: error => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("token");
      return Promise.resolve();
    }
    return Promise.resolve();
  },
  getPermissions: params => Promise.resolve()
};

export default authProvider;
