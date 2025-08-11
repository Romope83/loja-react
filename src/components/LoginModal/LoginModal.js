// import React, { useState } from 'react';
// import * as S from './LoginModal.styles';

// const LoginModal = ({ isOpen, onClose }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Lógica de login simulada
//     alert(`Login simulado com: ${email}`);
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <S.ModalOverlay>
//       <S.ModalContainer>
//         <S.CloseButton onClick={onClose}>×</S.CloseButton>
//         <S.ModalTitle>Login</S.ModalTitle>
//         <form onSubmit={handleSubmit}>
//           <S.FormGroup>
//             <label>Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </S.FormGroup>
//           <S.FormGroup>
//             <label>Senha:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </S.FormGroup>
//           <S.SubmitButton type="submit">Entrar</S.SubmitButton>
//         </form>
//       </S.ModalContainer>
//     </S.ModalOverlay>
//   );
// };

// export default LoginModal;



import React, { useState } from 'react';
import './LoginModal.styles.js';
import { supabase } from '../../supabaseClient.js';

function LoginModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: senha,
    });

    if (error) {
      setMensagemErro('Login falhou: ' + error.message);
    } else {
      alert('Login realizado com sucesso!');
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
        />
        {mensagemErro && <p style={{ color: 'red', fontSize: '14px' }}>{mensagemErro}</p>}
        <div className="modal-actions">
          <button className="btn-close" onClick={onClose}>Fechar</button>
          <button className="btn-login" onClick={handleLogin}>Entrar</button>
          <button
  onClick={async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password: senha,
    });
    if (error) {
      setMensagemErro('Erro no cadastro: ' + error.message);
    } else {
      alert('Usuário registrado! Verifique seu email para confirmação.');
    }
  }}
>
  Registrar
</button>
        </div>
      </div>
    </div>
  );
}
export default LoginModal;