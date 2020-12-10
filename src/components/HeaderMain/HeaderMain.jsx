import React from 'react';
import { Header, Wrapper } from './style';
import { Logo, Menu } from './components/index';

export default function HeaderMain() {
  return (
    <Header>
      <Wrapper>
        <Logo />
        <Menu />
      </Wrapper>
    </Header>
  );
}
