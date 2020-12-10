import styled from 'styled-components';

export const Header = styled.header`
  width: 100vw;
  height: 70px;
  background-color: ${({ theme }) => theme.primary.bgDark};
`;
export const Wrapper = styled.div`
  width: 80vw;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
