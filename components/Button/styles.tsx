import styled from 'styled-components';
import colors from '../../styles/colors';

export const ButtonElement = styled.div`
  width: 150px;
  background: ${colors.Beige};
  color: ${colors.Black};
  padding: 0.5rem 0;
  border-radius: 1rem;
  text-align: center;

  &:hover {
    background: ${colors.Salmon};
    transition: 0.5s;
  }

  a {
    display: block;
    width: 100%;
    height: 100%;
    color: ${colors.Black};
    text-decoration: none;
  }
`;

export const ButtonForm = styled.button`
  width: 150px;
  background: ${colors.Beige};
  color: ${colors.Black};
  padding: 0.7rem 0;
  font-size: 0.9rem;
  border-radius: 1rem;
  text-align: center;

  &:hover {
    background: ${colors.Salmon};
    transition: 0.5s;
  }
`;
