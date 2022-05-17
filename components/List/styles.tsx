import styled from 'styled-components';
import colors from '../../styles/colors';

export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${colors.White};
  padding: 2rem;
  flex-wrap: wrap;
  overflow-y: scroll;

  @media (min-width: 320px) {
    width: 100%;
  }
`;
