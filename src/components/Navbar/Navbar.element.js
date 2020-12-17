import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  background: #7e7c73;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarCotainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  justify-self: flex-start;
  color: #ffff;
  cursor: pointer;
  text-decoration: none;
  font-weight: 400;
  display: flex;
  align-items: center;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.3rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 50px;
    right: ${({ click }) => (click ? 0 : "-100%")};
    transition: all 0.5s ease;
    opacity: 1;
    background: #7e7c73;
    color: #fff;
  }
`;

export const NavItem = styled.li`
  height: 50px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #bbc4c2;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5em 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    padding: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
      color: #140005;
      background: #bbc4c2;
      transition: all 0.3s ease;
    }
  }
`;
export const Cart = styled.div`
  display: ${({ cart }) => (cart <= 0 ? "none" : "flex")};
  padding: 1px;
  position: absolute;
  font-size: 0.7rem;
  top: 10px;
  right: 0;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
