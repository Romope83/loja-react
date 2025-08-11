import React from 'react';
import { useCart } from '../../context/CartContext'; // Caminho corrigido
import * as S from './ProductCard.styles';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <S.ProductCardContainer>
      <S.ProductImage src={product.image} alt={product.name} />
      <S.ProductInfo>
        <S.ProductName>{product.name}</S.ProductName>
        <S.ProductPrice>R$ {product.price.toFixed(2)}</S.ProductPrice>
        <S.AddButton onClick={() => addToCart(product)}>
          Adicionar ao Carrinho
        </S.AddButton>
      </S.ProductInfo>
    </S.ProductCardContainer>
  );
};

export default ProductCard;