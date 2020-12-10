import styled from 'styled-components';

export const SlideBox = styled.div`
  width: 627px;
  height: 459px;
  background: ${({ theme }) => theme.primary.bgSlide};
  color: ${({ theme }) => theme.primary.textDefault};
`;

export const Icon = styled.img`
  width: 81px;
  height: 43px;
  margin-top: 111px;
  margin-left: 75px;
`;

export const Title = styled.h3`
  margin-top: 30px;
  margin-left: 75px;
  font: normal normal bold 28px/32px;
`;

export const Text = styled.p`
  width: 393px;
  margin-top: 15px;
  margin-left: 75px;
  font: normal normal normal 15px/22px;
`;
