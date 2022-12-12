import { Link } from "react-router-dom";
import styled from "styled-components";

const Pub = {
  Navbar: styled.nav`
    display: flex;
    justify-content: space-between;

    background-color: #333333;
    border-right: 1px solid #333333;
    color: white;
    height: 80px;
  `,

  NavbarLogo: styled.div`
    display: flex;
    align-items: center;

    height: 100%;
    margin: 0 80px;
  `,

  NavbarUl: styled.ul`
    display: flex;
    justify-content: space-between;
    width: 500px;
  `,

  NavbarLi: styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
  `,

  NavbarLink: styled(Link)`
    color: white;

    text-decoration: none;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  `,
};

export default Pub;
// .my-nav-bar {
//   width: 300px;
//   background-color: #333333;
//   border-right: 1px solid #333333;
// }

// /* .nav-head {
//   margin-top: 50px;
// } */

// .nav-head-text {
//   font-size: 18px;
//   padding: 20px;
//   color: white;
//   text-align: center;
// }

// .nav-menu {
//   height: 100%;
// }

// .nav-menu li {
//   float: left;
// }
