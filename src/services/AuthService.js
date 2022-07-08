import axios from "axios";

const baseUrl = "http://localhost:3004/";

export const RegisterUserService = (formData) => {
  return axios
    .post(baseUrl + "users", formData)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const LoginUserService = (formData) => {
  return axios
    .get(baseUrl + "users", formData)
    .then((data) => {
      for (let userData of data.data) {
        if (formData.email === userData.email) {
          if (formData.password === userData.password) {
            userData.msg = "success";
            return userData;
          }
        }
      }
      return data;
    })
    .catch((error) => {
      return error;
    });
};
