import React from 'react';
import { Dot, WrapperDots } from './style';

export default function Dots({ slide }) {
  return (
    <WrapperDots>
      <Dot slide={slide} id="0" />
      <Dot slide={slide} id="1" />
      <Dot slide={slide} id="2" />
    </WrapperDots>
  );
}
