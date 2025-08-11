import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import * as S from './ProductList.styles';
import { products } from '../../data';

const ProductList = () => {
  return (
    <S.ProductListContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.ProductListContainer>
  );
};

export default ProductList;