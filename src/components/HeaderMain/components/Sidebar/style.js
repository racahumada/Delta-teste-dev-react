import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideBox = styled.div`
  width: 318px;
  height: 100%;
  position: fixed;
  z-index: 200;
  top: 0;
  right: ${({ open }) => (open ? '0px' : '-318px')};
  background: ${({ theme }) => theme.primary.bgMain};
  transition: 1s;
`;

export const CloseBox = styled.i`
  font-size: 2rem;
  position: relative;
  top: 1.5rem;
  left: 1.5rem;
  cursor: pointer;
`;

export const Ul = styled.ul`
  margin-left: 57px;
  list-style: none;
  & li {
    margin-top: 54px;
    :first-child {
      margin-top: 75px;
    }
  }
`;

export const LinkMenu = styled(Link)`
  text-decoration: none;
  font-weight: bold;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? '0px' : '-100%')};
  z-index: 1;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.primary.bgOverlay};
  transition: 1s;
`;
