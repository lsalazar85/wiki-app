import styled from 'styled-components';
import colors from '../../styles/colors';

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${colors.White};
  border-right: 1px solid ${colors.Orange};

  @media (min-width: 320px) {
    flex-direction: column;
    width: 100%;
    padding: 2rem;
  }

  @media (min-width: 768px) {
    flex: 20rem;
  }
`;

export const FilterTitle = styled.div`
  @media (min-width: 320px) {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
`;

export const FilterOption = styled.div`
  @media (min-width: 320px) {
    display: flex;
    justify-content: center;
    width: 100%;

    div {
      @media(min-width: 320px){
        margin-right: 0.5rem;
        font-size: 14px;
      }

      @media(min-width: 768px){
        margin-right: 0;
        font-size: 1rem;
      }
      
      @media(min-width: 768px){
        &:first-child {
          margin: 0 1rem 0 0;
        }
      }
    }
  }

  @media (min-width: 768px) {
    margin-top: 1rem;
    flex-direction: column;
    align-items: center;

    div {
      &:first-child {
        margin: 0 0 1rem 0;
      }

      &:last-child {
        margin: 1rem 0 0 0;
      }
    }
    
    
  }
`;
