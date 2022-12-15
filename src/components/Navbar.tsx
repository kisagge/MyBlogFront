import { useEffect } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import api from "../api/api";
import { userInfoState } from "../states/userState";
import Pub from "./NavbarStyle";

const Navbar = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const setUserDefaultState = useResetRecoilState(userInfoState);

  // onClick function
  const handleClickLogout = () => {
    sessionStorage.removeItem("accessToken");
    if (!sessionStorage.getItem("accessToken")) {
      setUserDefaultState();
    }
  };

  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken") ?? "";
    if (accessToken) {
      api.userInfo({ token: accessToken }).then((res) => {
        if (res.data !== null) {
          setUserInfo(res.data);
        }
      });
    }
  }, []);

  return (
    <Pub.Navbar>
      <Pub.NavbarLogo>BY Blog</Pub.NavbarLogo>

      <Pub.NavbarUl>
        <Pub.NavbarLi>
          <Pub.NavbarLink to="/">메인페이지</Pub.NavbarLink>
        </Pub.NavbarLi>
        <Pub.NavbarLi>
          <Pub.NavbarLink to="/posts">게시글</Pub.NavbarLink>
        </Pub.NavbarLi>
        <Pub.NavbarLi>정보</Pub.NavbarLi>
        {userInfo.role >= 0 && <Pub.NavbarLi>{userInfo.userId}</Pub.NavbarLi>}
        {userInfo.role >= 0 && (
          <Pub.NavbarLogoutLi onClick={handleClickLogout}>Logout</Pub.NavbarLogoutLi>
        )}
        {userInfo.role < 0 && (
          <Pub.NavbarLi>
            <Pub.NavbarLink to="/login">로그인</Pub.NavbarLink>
          </Pub.NavbarLi>
        )}
      </Pub.NavbarUl>
    </Pub.Navbar>
  );
};

export default Navbar;
