import styled from 'styled-components';

export const Icon = styled.i`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary.textTitle};
`;

export const Button = styled.button`
  cursor: pointer;
  border: 0;
  background: ${({ theme }) => theme.primary.bgDark};
`;
