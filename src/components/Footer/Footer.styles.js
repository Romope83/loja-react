import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #282c34;
  color: white;
  padding: 1rem;
  margin-top: auto;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactInfo = styled.div`
  text-align: right;
  p {
    margin: 0.2rem 0;
  }
`;