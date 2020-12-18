import { useState } from "react";
import {
  Nav,
  NavbarCotainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Cart,
} from "./Navbar.element";
import { IconContext } from "react-icons/lib";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [carts, setCarts] = useState(
    localStorage.getItem("carts")
      ? JSON.parse(localStorage.getItem("carts"))
      : []
  );

  const handleClick = () => setClick(!click);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarCotainer>
            <NavLogo to="/">Mororapi Resto</NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/menu">Menu</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/pesanan">
                  Pesanan <Cart carts={carts}>{carts.length}</Cart>
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarCotainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
