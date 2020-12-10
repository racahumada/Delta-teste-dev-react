import styled from 'styled-components';

export const Dot = styled.hr`
  margin-right: 14px;
  width: ${({ id, slide }) => (slide === parseInt(id) ? '45px' : '21px')};
  border: 10px solid;
  color: ${({ id, slide, theme }) =>
    slide === parseInt(id) ? theme.primary.bgMain : theme.primary.brDark};
  :last-child {
    margin-right: 40px;
  }
`;

export const WrapperDots = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: flex-end;
`;
