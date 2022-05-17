import { FilterWrapper, FilterOption, FilterTitle } from './styles';
import Search from '../Search';
import ButtonLink from '../Button/ButtonLink';

const Filter = () => (
  <FilterWrapper>
    <FilterTitle>Filters</FilterTitle>
    <Search />
    <FilterOption>
      <ButtonLink href={'/characters'} text="Characters" />
      <ButtonLink href={'/episodes'} text="Episodes" />
      <ButtonLink href={'/'} text="Reset Filters" />
    </FilterOption>
  </FilterWrapper>
);

export default Filter;
