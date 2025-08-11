import React from 'react';
import { useCart } from '../context/CartContext';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import * as S from '../components/CartModal/CartModal.styles';

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity,
    cartTotal 
  } = useCart();

  return (
    <>
      <Header />
      <main>
        <h1>Seu Carrinho</h1>
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
                      R$ {item.price.toFixed(2)} x 
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => 
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                      />
                    </S.ItemPrice>
                    <button onClick={() => removeFromCart(item.id)}>
                      Remover
                    </button>
                  </S.ItemInfo>
                </S.CartItem>
              ))}
            </S.CartItems>
            <S.Total>Total: R$ {cartTotal.toFixed(2)}</S.Total>
            <S.CheckoutButton>Finalizar Compra</S.CheckoutButton>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Cart;