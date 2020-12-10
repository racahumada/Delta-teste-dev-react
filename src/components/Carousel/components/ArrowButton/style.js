import styled from 'styled-components';
import { imgLeftArrow, imgRightArrow } from '../../../../assets/svgs/index';

export const WrapperButtons = styled.div`
  display: flex;
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 74px;
  height: 74px;
  border: 0;
  border-radius: 0;
  background: ${({ name, theme }) =>
    name === 'left' ? theme.primary.btnLeft : theme.primary.btnRight};
  background-image: ${({ name }) =>
    name === 'left' ? `url(${imgLeftArrow})` : `url(${imgRightArrow})`};
  background-repeat: no-repeat;
  background-position: center center;

  :hover {
    background: ${({ theme }) => theme.primary.btnHover};
    background-image: ${({ name }) =>
      name === 'left' ? `url(${imgLeftArrow})` : `url(${imgRightArrow})`};
    background-repeat: no-repeat;
    background-position: center center;
  }
`;
