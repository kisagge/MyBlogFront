import { atom, selector } from "recoil";
import { UserInfoRes } from "../api/schema";

export const userInfoState = atom<UserInfoRes>({
  key: "userInfo",
  default: {
    userId: "",
    role: -1,
  },
});
