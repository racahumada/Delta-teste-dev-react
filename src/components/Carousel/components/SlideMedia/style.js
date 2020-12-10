import styled from 'styled-components';

export const MediaBox = styled.div`
  width: 724px;
  height: 459px;
  background: ${({ theme }) => theme.primary.bgSlide};
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
`;
