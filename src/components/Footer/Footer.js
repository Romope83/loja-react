import React from 'react';
import * as S from './Footer.styles';

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <p>© 2023 Felipe Loja - Todos os direitos reservados</p>
        <S.ContactInfo>
          <p>Contato: contato@felipeloja.com</p>
          <p>Telefone: (00) 1234-5678</p>
        </S.ContactInfo>
      </S.FooterContent>
    </S.FooterContainer>
  );
};

export default Footer;