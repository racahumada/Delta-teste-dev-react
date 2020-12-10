import {
  imgMapsLocation,
  imgTravel,
  imgTruck,
} from '../../../assets/svgs/index';
import {
  imgCarousel1,
  imgCarousel2,
  imgCarousel3,
} from '../../../assets/images/index';

export const listContent = [
  {
    icon: imgTruck,
    title: 'Carousel 1',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo',
    img: imgCarousel1,
    visible: true,
  },
  {
    icon: imgTravel,
    title: 'Carousel 2',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo',
    img: imgCarousel2,
    visible: false,
  },
  {
    icon: imgMapsLocation,
    title: 'Carousel 3',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo',
    img: imgCarousel3,
    visible: false,
  },
];
