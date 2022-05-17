import styled from 'styled-components';
import colors from './colors';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 100%;
`;

export const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${colors.Gray};
`;

export const Section = styled.section`
  display: flex;
  height: 100%;
  overflow: hidden;

  @media (min-width: 320px) {
    flex-direction: column;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const DataNotFound = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: ${colors.Orange}
`
