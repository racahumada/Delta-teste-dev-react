import React from 'react';
import { Dots } from '../index';
import { Icon, SlideBox, Text, Title } from './style';

export default function SlideContent({ dataValue, slide }) {
  const { icon, title, text } = dataValue;
  return (
    <SlideBox>
      <Icon src={icon} alt="Icon Truck" />
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Dots slide={slide} />
    </SlideBox>
  );
}
