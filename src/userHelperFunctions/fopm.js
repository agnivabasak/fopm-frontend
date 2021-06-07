import fopmApi from "../apis/fopmApi";
import cookie from "react-cookies";

export const signUpUser = (name, email, password, password2) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const userdets = {
    username: name,
    email: email,
    password: password,
    password2: password2,
  };
  const jsonUserDets = JSON.stringify(userdets);
  return new Promise((resolve, reject) => {
    fopmApi
      .post("api/auth/register/", jsonUserDets, config)
      .then((resp) => {
        resolve(resp);
        if (resp.status !== 200) {
          throw new Error("Something Went Wrong!");
        }
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

//localhost:8000/api/auth/login/

export const logInUser = (name, password) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const userdets = {
    username: name,
    password: password,
  };
  const jsonUserDets = JSON.stringify(userdets);
  return new Promise((resolve, reject) => {
    fopmApi
      .post("api/auth/login/", jsonUserDets, config)
      .then((resp) => {
        resolve(resp);
        if (resp.status !== 200) {
          throw new Error("Something Went Wrong!");
        }
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

//localhost:8000/api/v1/create-org

export const createOrg = (name, desc) => {
  const token = cookie.load("token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const userdets = {
    name: name,
    description: desc,
  };
  const jsonUserDets = JSON.stringify(userdets);
  return new Promise((resolve, reject) => {
    fopmApi
      .post("api/v1/create-org", jsonUserDets, config)
      .then((resp) => {
        console.log(resp);
        resolve(resp);
        if (resp.status !== 200 || resp.status !== 201) {
          throw new Error("Something Went Wrong!");
        }
      })
      .catch((err) => {
        console.log("inside fopm userhelper", err);
        reject(err.response);
      });
  });
};

export const createProj = (name, desc, orgName) => {
  const token = cookie.load("token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const userdets = {
    name: name,
    description: desc,
    organization: orgName,
  };
  const jsonUserDets = JSON.stringify(userdets);
  return new Promise((resolve, reject) => {
    fopmApi
      .post("api/v1/create-project", jsonUserDets, config)
      .then((resp) => {
        console.log(resp);
        resolve(resp);
        if (resp.status !== 200 || resp.status !== 201) {
          throw new Error("Something Went Wrong!");
        }
      })
      .catch((err) => {
        console.log("inside fopm userhelper", err);
        reject(err.response);
      });
  });
};
