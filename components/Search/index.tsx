import { useState, SyntheticEvent } from 'react';
import { ChangeEvent } from 'react';
import { useRouter } from 'next/router';

import ButtonForm from '../Button/ButtonForm';

import { SearchContainer, SearchInput } from './styles';


const Search = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/character/${inputValue}`);
    setInputValue('');
  };

  return (
    <>
      <SearchContainer onSubmit={handleSubmit}>
        <SearchInput
          onChange={handleChange}
          type="text"
          placeholder="Search by name"
          data-testid="search"
          value={inputValue}
        />
        <ButtonForm text='Search'/>
      </SearchContainer>
    </>
  );
};

export default Search;
