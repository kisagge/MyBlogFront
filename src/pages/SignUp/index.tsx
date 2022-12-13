import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from "../../api/api";

const INPUT_MAXLENGTH = 15;

const SignUpPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // input Handler
  const handleChangeId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleClickSignInButton = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await api.signUp({ userId: id, password });

      if (!res.result) {
        if (res.error) {
          setError(res.error);
        } else {
          setError("Failed to sign up");
        }
      }

      navigate({
        pathname: "/login",
      });
    } catch (err) {
      setError(String(err));
    }
  };

  return (
    <Pub.Page>
      <Pub.SignUpSection>
        <Pub.SignUpLogo>Sign Up</Pub.SignUpLogo>
        <Pub.SignUpFormSection onSubmit={handleClickSignInButton}>
          <Pub.SignUpIdDiv>
            <label htmlFor="userId">Id</label>
            <input id="userId" onChange={handleChangeId} value={id} maxLength={INPUT_MAXLENGTH} />
          </Pub.SignUpIdDiv>
          <Pub.SignUpPasswordDiv>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              onChange={handleChangePassword}
              value={password}
              type="password"
              autoComplete="off"
              maxLength={INPUT_MAXLENGTH}
            />
          </Pub.SignUpPasswordDiv>
          <Pub.SignUpConfirmPasswordDiv>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              onChange={handleChangeConfirmPassword}
              value={confirmPassword}
              type="password"
              autoComplete="off"
              maxLength={INPUT_MAXLENGTH}
            />
          </Pub.SignUpConfirmPasswordDiv>
          <Pub.SignUpButton>
            <button>Sign Up</button>
          </Pub.SignUpButton>
          {error && <Pub.SignUpErrorDiv>{error}</Pub.SignUpErrorDiv>}
        </Pub.SignUpFormSection>
      </Pub.SignUpSection>
    </Pub.Page>
  );
};

export default SignUpPage;

const Pub = {
  Page: styled.div`
    display: flex;
    justify-content: center;
    background-color: #f5f5dc;
    width: 100%;
    height: 867px;
    overflow: hidden;
  `,

  SignUpSection: styled.section`
    width: 500px;
    height: 700px;
    border: 1px solid #333333;
    margin-top: 50px;

    background-color: #ffffff;
    border-radius: 10px;
    border: none;
  `,

  SignUpLogo: styled.div`
    height: 130px;
    text-align: center;
    padding-top: 100px;
    font-size: 30px;
    font-weight: 1000;
  `,

  SignUpFormSection: styled.form`
    label {
      display: block;
    }
  `,

  SignUpIdDiv: styled.div`
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

  SignUpPasswordDiv: styled.div`
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

  SignUpConfirmPasswordDiv: styled.div`
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

  SignUpButton: styled.div`
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

  SignUpErrorDiv: styled.div`
    width: 70%;

    display: flex;
    flex-direction: column;
    margin: 0 auto;
  `,
};
