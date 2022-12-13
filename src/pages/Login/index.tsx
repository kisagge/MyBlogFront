import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import api from "../../api/api";

const INPUT_MAXLENGTH = 15;

const LoginPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("");

  // input Handler
  const handleChangeId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // onClick Handler
  const handleClickLoginButton = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await api.login({ userId: id, password });

      if (!res.data) {
        if (res.error) {
          setError(res.error);
        } else {
          setError("Failed to login");
        }
        return;
      }

      sessionStorage.setItem("accessToken", res.data.token);

      navigate({
        pathname: "/",
      });
    } catch (err) {
      setError(String(err));
    }
  };

  const handleClickSignUpButton = () => {
    navigate({ pathname: "/sign-in" });
  };

  return (
    <Pub.Page>
      <Pub.LoginSection>
        <Pub.LoginLogo>Login</Pub.LoginLogo>
        <Pub.LoginFormSection onSubmit={handleClickLoginButton}>
          <Pub.LoginIdDiv>
            <label htmlFor="userId">Id</label>
            <input id="userId" onChange={handleChangeId} value={id} maxLength={INPUT_MAXLENGTH} />
          </Pub.LoginIdDiv>
          <Pub.LoginPasswordDiv>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              onChange={handleChangePassword}
              value={password}
              type="password"
              autoComplete="off"
              maxLength={INPUT_MAXLENGTH}
            />
          </Pub.LoginPasswordDiv>
          <Pub.LoginButton>
            <button>Login</button>
          </Pub.LoginButton>
          <Pub.SignUpButton>
            <button type="button" onClick={handleClickSignUpButton}>
              Sign Up
            </button>
          </Pub.SignUpButton>
          {error && <Pub.LoginErrorDiv>{error}</Pub.LoginErrorDiv>}
        </Pub.LoginFormSection>
      </Pub.LoginSection>
    </Pub.Page>
  );
};

export default LoginPage;

const Pub = {
  Page: styled.div`
    display: flex;
    justify-content: center;
    background-color: #f5f5dc;
    width: 100%;
    height: 867px;
    overflow: hidden;
  `,

  LoginSection: styled.section`
    width: 500px;
    height: 700px;
    border: 1px solid #333333;
    margin-top: 50px;

    background-color: #ffffff;
    border-radius: 10px;
    border: none;
  `,

  LoginLogo: styled.div`
    height: 130px;
    text-align: center;
    padding-top: 100px;
    font-size: 30px;
    font-weight: 1000;
  `,

  LoginFormSection: styled.form`
    label {
      display: block;
    }
  `,

  LoginIdDiv: styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    label {
      margin-bottom: 10px;
      font-size: 20px;
    }

    input {
      height: 30px;
      margin-bottom: 20px;
      border: none;
      border-bottom: 1px solid #000000;
      outline: none;
    }
  `,

  LoginPasswordDiv: styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    label {
      font-size: 20px;
      margin-bottom: 10px;
    }

    input {
      height: 30px;
      margin-bottom: 20px;
      border: none;
      border-bottom: 1px solid #000000;
      outline: none;
    }
  `,

  LoginButton: styled.div`
    width: 70%;

    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 30px 0 15px 0;

    button {
      height: 50px;
      border: none;
      display: inline-block;
      border-radius: 15px;
      text-decoration: none;
      font-weight: 600;
      background-color: #444444;
      color: white;

      :hover {
        cursor: pointer;
      }
    }
  `,

  SignUpButton: styled.div`
    width: 70%;

    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 15px 0;

    button {
      height: 50px;
      border: none;
      display: inline-block;
      border-radius: 15px;
      text-decoration: none;
      font-weight: 600;
      background-color: #444444;
      color: white;

      :hover {
        cursor: pointer;
      }
    }
  `,

  LoginErrorDiv: styled.div`
    width: 70%;

    display: flex;
    flex-direction: column;
    margin: 0 auto;

    color: red;
  `,
};
