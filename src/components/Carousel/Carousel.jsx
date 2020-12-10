import React, { useState } from 'react';
import { SectionCarousel, WrapperCarousel, WrapperMedia } from './style';
import { ArrowButton, SlideContent, SlideMedia } from './components/index';
import { Wrapper } from '../index';
import { listContent } from './content/content';

export default function Carousel() {
  const [data, setData] = useState(listContent);

  const renderCarousel = (dataValue, index) => {
    const { visible, img } = dataValue;

    return (
      <WrapperCarousel key={index} visible={visible}>
        <SlideContent dataValue={dataValue} slide={index} />
        <WrapperMedia>
          <SlideMedia img={img} />
          <ArrowButton onClick={handleClick} slide={index} />
        </WrapperMedia>
      </WrapperCarousel>
    );
  };

  const handleClick = ({ target }) => {
    const { value } = target;
    const newSlide =
      value >= data.length ? 0 : value < 0 ? data.length - 1 : parseInt(value);

    const newData = data.map((item, index) => {
      index === newSlide ? (item.visible = true) : (item.visible = false);

      return { ...item };
    });
    setData([...newData]);
  };

  return (
    <SectionCarousel>
      <Wrapper>{data.map(renderCarousel)}</Wrapper>
    </SectionCarousel>
  );
}
