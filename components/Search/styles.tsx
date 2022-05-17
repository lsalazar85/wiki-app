import styled from "styled-components";
import colors from '../../styles/colors';

export const SearchContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media(min-width: 320px){
    margin-bottom: 1rem;
  }
  
  @media(min-width: 768px){
    margin-bottom: 3rem;
    padding: 1rem 0;
  }
`

export const SearchInput = styled.input`
  border-radius: 0.5rem;
  height: 2.5rem;
  padding: 1rem;
  outline: none;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  margin-right: 1rem;
  border: 3px solid ${colors.SalmonSecondary};
  margin-bottom: 1rem;
  
  @media(min-width: 320px){
    width: 70%;
  }

  @media(min-width: 767px){
    width: 15rem;
  }
`
