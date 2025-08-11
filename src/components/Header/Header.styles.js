import styled from 'styled-components'; // Esta linha estava faltando

export const HeaderContainer = styled.header`
  background-color: #282c34;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

export const NavContainer = styled.nav`
  a {
    color: white;
    margin-left: 1rem;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const LoginButton = styled.button`
  background: none;
  border: none;
  color: white;
  margin-left: 1rem;
  cursor: pointer;
  font-size: inherit;
  &:hover {
    text-decoration: underline;
  }
`;

export const CartButton = styled.button`
  background: none;
  border: none;
  color: white;
  margin-left: 1rem;
  cursor: pointer;
  font-size: inherit;
  &:hover {
    text-decoration: underline;
  }
`;