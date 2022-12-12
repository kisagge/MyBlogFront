export interface ResType<T> {
  data: T | null;
  error: string | null;
  result: boolean;
}

export interface LoginReq {
  userId: string;
  password: string;
}

export interface LoginRes {
  token: string;
}

export interface SignUpReq {
  userId: string;
  password: string;
}
