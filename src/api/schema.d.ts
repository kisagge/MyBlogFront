export interface LoginReq {
  userId: string;
  password: string;
}

export interface LoginRes {
  token: string;
}
