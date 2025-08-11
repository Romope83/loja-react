import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const ModalTitle = styled.h2`
  margin-top: 0;
  text-align: center;
`;

export const CartItems = styled.div`
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 1rem;
`;

export const CartItem = styled.div`
  display: flex;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
`;

export const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-right: 1rem;
`;

export const ItemInfo = styled.div`
  flex: 1;
`;

export const ItemName = styled.h4`
  margin: 0 0 0.5rem 0;
`;

export const ItemPrice = styled.p`
  margin: 0;
  color: #666;
`;

export const Total = styled.p`
  text-align: right;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const CheckoutButton = styled.button`
  background-color: #282c34;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  margin-top: 1rem;
  &:hover {
    background-color: #3d424b;
  }
`;