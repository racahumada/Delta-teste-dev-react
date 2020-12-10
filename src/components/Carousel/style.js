import styled from 'styled-components';

export const SectionCarousel = styled.section`
  width: 100vw;
  height: 459px;
  background: ${({ theme }) => theme.primary.bgMain};
`;

export const WrapperCarousel = styled.div`
  position: relative;
  top: -155px;
  width: 80vw;
  margin: 0 auto;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  animation-name: fade;
  animation-duration: 1s;

  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
`;

export const WrapperMedia = styled.div`
  width: 724px;
  height: auto;
`;
