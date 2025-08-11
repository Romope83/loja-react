import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; // Caminho corrigido
import * as S from './Header.styles';
import LoginModal from '../LoginModal/LoginModal'; // Importação adicionada
import CartModal from '../CartModal/CartModal';

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <>
      <S.HeaderContainer>
        <S.LogoContainer>
          <S.Logo>Felipe Loja</S.Logo>
        </S.LogoContainer>
        <S.NavContainer>
          <Link to="/">Início</Link>
          <Link to="/products">Produtos</Link>
          <S.CartButton onClick={() => setIsCartModalOpen(true)}>
            Carrinho ({cartItems.reduce((total, item) => total + item.quantity, 0)})
          </S.CartButton>
          <S.LoginButton onClick={() => setIsLoginModalOpen(true)}>
            Login
          </S.LoginButton>
        </S.NavContainer>
      </S.HeaderContainer>
      
      <CartModal 
        isOpen={isCartModalOpen} 
        onClose={() => setIsCartModalOpen(false)} 
      />
      
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
};

export default Header;