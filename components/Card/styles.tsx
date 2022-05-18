import styled from 'styled-components';
import Image from 'next/image';
import colors from '../../styles/colors';

export const CardWrapper = styled.div`
  display: flex;
  border-radius: 0.5rem;
  border: 1px solid ${colors.Orange};
  max-height: 15rem;

  @media (min-width: 320px) {
    width: 100%;
    margin: 0 0 1rem 0;
  }

  @media (min-width: 1000px) {
    flex: 1 1 48%;

    &:nth-child(even) {
      margin-left: 1rem;
    }
  }
`;

export const CardImage = styled(Image)`
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
`;

export const CardInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

export const Name = styled.h2``;

export const ItemInfo = styled.span<{ cursorStyle?: boolean }>`
  font-size: 0.95rem;
  cursor: ${(props) => (props.cursorStyle ? 'pointer' : 'auto')};
  color: ${(props) =>
    props.cursorStyle ? `${colors.Orange}` : `${colors.Black}`};

  &:last-child {
    margin-top: 1rem;
  }
`;

export const DetailsList = styled.div`
  font-size: 0.9rem;
  padding: 0.5rem;
`;

export const DetailText = styled.p``
