import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Nav.styles';

const Nav = () => {
  return (
    <S.NavContainer>
      <Link to="/">Início</Link>
      <Link to="/products">Produtos</Link>
      <Link to="/cart">Carrinho</Link>
      <Link to="/login">Login</Link>
    </S.NavContainer>
  );
};

export default Nav;