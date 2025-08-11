import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  padding: 1rem;
`;

export const ProductName = styled.h3`
  margin: 0 0 0.5rem 0;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  margin: 0 0 1rem 0;
`;

export const AddButton = styled.button`
  background-color: #282c34;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #3d424b;
  }
`;