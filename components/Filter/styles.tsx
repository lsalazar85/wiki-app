import styled from "styled-components";
import colors from "../../styles/colors";

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${colors.White};

  @media (min-width: 320px) {
    flex-direction: column;
    width: 100%;
    padding: 1rem 1rem 0 1rem;
    border: none;
  }

  @media (min-width: 768px) {
    width: 22rem;
    border-right: 1px solid ${colors.Orange};
  }
`;

export const FilterOption = styled.div`
  @media (min-width: 320px) {
    display: flex;
    justify-content: center;
    width: 100%;

    div {
      @media (min-width: 320px) {
        font-size: 0.85rem;
        margin-bottom: 0.5rem;
      }

      @media (min-width: 768px) {
        margin-right: 0;
        font-size: 1rem;
      }

      @media (min-width: 768px) {
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

export const FiltersMobile = styled.div`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export const FilterToggle = styled.div`
  width: 100px;
  background: ${colors.Orange};
  color: ${colors.White};
  padding: 0.5rem 0;
  border-radius: 1rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const FiltersDesktop = styled.div`
  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: block;
  }
`;
