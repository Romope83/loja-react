import React, { useState } from 'react';
import * as S from './LoginModal.styles';

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de login simulada
    alert(`Login simulado com: ${email}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.CloseButton onClick={onClose}>×</S.CloseButton>
        <S.ModalTitle>Login</S.ModalTitle>
        <form onSubmit={handleSubmit}>
          <S.FormGroup>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <label>Senha:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </S.FormGroup>
          <S.SubmitButton type="submit">Entrar</S.SubmitButton>
        </form>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default LoginModal;