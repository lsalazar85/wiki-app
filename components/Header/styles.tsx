import styled from 'styled-components';
import colors from '../../styles/colors';

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  height: 4.5rem;
  align-items: center;
  background: ${colors.SalmonSecondary};
  box-shadow: ${colors.GrayBoxShadow} 0 4px 15px;

  @media (min-width: 320px) {
    justify-content: center;
    padding: 0 2rem;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    padding: 0.5rem 4.375rem;
  }
`;

export const HeaderText = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${colors.Orange};

  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: block;
  }
`;

export const HeaderSide = styled.div``;
