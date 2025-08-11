import React from 'react';
import { useCart } from '../../context/CartContext'; // Caminho corrigido
import * as S from './CartModal.styles';

const CartModal = ({ isOpen, onClose }) => {
  const { cartItems, cartTotal } = useCart();

  return (
    <S.ModalOverlay style={{ display: isOpen ? 'flex' : 'none' }}>
      <S.ModalContainer>
        <S.CloseButton onClick={onClose}>×</S.CloseButton>
        <S.ModalTitle>Carrinho de Compras</S.ModalTitle>
        {cartItems.length === 0 ? (
          <p>Seu carrinho está vazio</p>
        ) : (
          <>
            <S.CartItems>
              {cartItems.map((item) => (
                <S.CartItem key={item.id}>
                  <S.ItemImage src={item.image} alt={item.name} />
                  <S.ItemInfo>
                    <S.ItemName>{item.name}</S.ItemName>
                    <S.ItemPrice>
                      R$ {item.price.toFixed(2)} x {item.quantity}
                    </S.ItemPrice>
                  </S.ItemInfo>
                </S.CartItem>
              ))}
            </S.CartItems>
            <S.Total>Total: R$ {cartTotal.toFixed(2)}</S.Total>
            <S.CheckoutButton>Finalizar Compra</S.CheckoutButton>
          </>
        )}
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default CartModal;