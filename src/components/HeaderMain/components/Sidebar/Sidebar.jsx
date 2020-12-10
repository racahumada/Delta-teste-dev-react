import React from 'react';
import PropTypes from 'prop-types';
import { CloseBox, SideBox, Ul, LinkMenu, Overlay } from './style';

const Links = () => (
  <Ul>
    <li>
      <LinkMenu to="/">Menu 1</LinkMenu>
    </li>
    <li>
      <LinkMenu to="/">Menu 2</LinkMenu>
    </li>
    <li>
      <LinkMenu to="/">Menu 3</LinkMenu>
    </li>
    <li>
      <LinkMenu to="/">Menu 4</LinkMenu>
    </li>
  </Ul>
);

export default function Sidebar({ open, onClick }) {
  return (
    <>
      <SideBox open={open}>
        <CloseBox className="fas fa-times" onClick={onClick} />
        <Links />
      </SideBox>
      <Overlay open={open} />
    </>
  );
}

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};
