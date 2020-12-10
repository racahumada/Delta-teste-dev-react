import styled from 'styled-components';
import { imgBgHome } from '../../assets/images/index';

export const Section = styled.section`
  width: 100vw;
  height: 717px;
  background: ${({ theme }) => theme.primary.bgDark};
  background-image: url(${imgBgHome});
  background-repeat: no-repeat;
  background-position: -400px 100%;
  background-size: 130%;
`;

export const Title = styled.h1`
  width: 826px;
  padding-top: 150px;
  font: normal normal bold 72px/89px Arial;
  color: ${({ theme }) => theme.primary.textTitle};
`;

export const Line = styled.hr`
  margin-top: 40px;
  width: 150px;
  border: 10px solid;
  color: ${({ theme }) => theme.primary.bgMain};
`;
