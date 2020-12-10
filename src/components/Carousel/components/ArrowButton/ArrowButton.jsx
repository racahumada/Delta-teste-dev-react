import React from 'react';
import { WrapperButtons, Button } from './style';

export default function ArrowButton({ onClick, slide }) {
  return (
    <WrapperButtons>
      <Button name="left" value={slide - 1} onClick={onClick} />
      <Button name="right" value={slide + 1} onClick={onClick} />
    </WrapperButtons>
  );
}
