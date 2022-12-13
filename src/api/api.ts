import { LoginReq, LoginRes, ResType, SignUpReq, UserInfoReq, UserInfoRes } from "./schema";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL ?? "http://localhost:5000" + "/api";

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

  userInfo: async (request: UserInfoReq): Promise<ResType<UserInfoRes>> => {
    return await (
      await fetch(`${API_BASE_URL}/user/info`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authentication: `Bearer ${request.token}`,
        },
      })
    ).json();
  },
};

export default api;
