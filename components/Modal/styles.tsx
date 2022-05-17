import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Times } from '@styled-icons/fa-solid';
import colors from '../../styles/colors';

export const Positioned = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: ${() => window.innerHeight + 'px'};
  z-index: 1000;
`;

export const Background = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: ${colors.Black};
`;

export const Content = styled(motion.div)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: ${colors.White};
  padding: 1.87em 1em;
  border-radius: 0.5rem;
  @media (min-width: 1024px) {
    width: 25.625rem;
    left: calc(50% - 12.813rem);
    top: 50%;
    bottom: auto;
    transform: translateY(-50%) !important;
  }
`;

export const CloseIcon = styled(Times).attrs({
  size: '1.5em',
})`
  color: ${colors.Salmon};
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  color: ${colors.Black};
  margin-bottom: 1.5rem;
`;

export const Scrollable = styled.div`
  max-height: 75vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0.2rem;
  }
  ::-webkit-scrollbar-thumb {
    background: ${colors.Salmon};
  }
`;
