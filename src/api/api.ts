import { LoginReq, LoginRes, ResType, SignUpReq } from "./schema";

const API_BASE_URL = "http://localhost:5000/api";

const api = {
  login: async (request: LoginReq): Promise<ResType<LoginRes>> => {
    return await (
      await fetch(`${API_BASE_URL}/user/login`, {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();
  },

  signUp: async (request: SignUpReq): Promise<ResType<null>> => {
    return await (
      await fetch(`${API_BASE_URL}/user/sign-up`, {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();
  },
};

export default api;
