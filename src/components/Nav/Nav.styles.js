import styled from 'styled-components';

export const NavContainer = styled.nav`
  background-color: #333;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  
  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;