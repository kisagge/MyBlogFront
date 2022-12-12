import Pub from "./NavbarStyle";

const Navbar = () => {
  return (
    <Pub.Navbar>
      <Pub.NavbarLogo>BY Blog</Pub.NavbarLogo>

      <Pub.NavbarUl>
        <Pub.NavbarLi>
          <Pub.NavbarLink to="/">Main</Pub.NavbarLink>
        </Pub.NavbarLi>
        <Pub.NavbarLi>
          <Pub.NavbarLink to="/posts">Posts</Pub.NavbarLink>
        </Pub.NavbarLi>
        <Pub.NavbarLi>Info</Pub.NavbarLi>
        <Pub.NavbarLi>
          <Pub.NavbarLink to="/login">Login</Pub.NavbarLink>
        </Pub.NavbarLi>
      </Pub.NavbarUl>
    </Pub.Navbar>
  );
};

export default Navbar;
