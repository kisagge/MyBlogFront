import { Link } from "react-router-dom";
import Pub from "./NavbarStyle";

const Navbar = () => {
  return (
    <Pub.Navbar>
      <Pub.NavbarLogo>BY Blog</Pub.NavbarLogo>

      <Pub.NavbarUl>
        <Pub.NavbarLi>
          <Pub.NavbarLink to="/">Post1</Pub.NavbarLink>
        </Pub.NavbarLi>
        <Pub.NavbarLi>Post2</Pub.NavbarLi>
        <Pub.NavbarLi>Post3</Pub.NavbarLi>
        <Pub.NavbarLi>Post4</Pub.NavbarLi>
      </Pub.NavbarUl>
    </Pub.Navbar>
  );
};

export default Navbar;
