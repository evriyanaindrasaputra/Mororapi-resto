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
  const [cart, setCart] = useState(0);

  const handleClick = () => setClick(!click);
  const addToCart = () => setCart(cart + 1);
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
              <NavItem onClick={addToCart}>
                <NavLinks to="/pesanan">
                  Pesanan <Cart cart={cart}>{cart}</Cart>
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
