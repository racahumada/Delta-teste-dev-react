import React, { useState } from 'react';
import { Icon, Button } from './style';
import { Sidebar } from '../index';

export default function Menu() {
  const [open, setVisibleMenu] = useState(false);

  const handleClick = () => {
    setVisibleMenu(!open);
  };

  return (
    <>
      <Button onClick={handleClick}>
        <Icon className="fas fa-bars"></Icon>
      </Button>
      <Sidebar onClick={handleClick} open={open} />
    </>
  );
}
