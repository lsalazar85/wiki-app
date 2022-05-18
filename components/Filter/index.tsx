import { useState } from "react";
import {
  FilterWrapper,
  FilterOption,
  FiltersMobile,
  FiltersDesktop,
  FilterToggle,
} from "./styles";
import Search from "../Search";
import ButtonLink from "../Button/ButtonLink";

const Filter = () => {
  const [showFilters, setShowFilters] = useState<boolean>(false);

  return (
    <FilterWrapper>
      <Search />
      <FilterOption>
        <FiltersDesktop>
          <ButtonLink href={"/characters"} text="Characters" />
          <ButtonLink href={"/episodes"} text="Episodes" />
          <ButtonLink href={"/"} text="Reset Filters" />
        </FiltersDesktop>
        <FiltersMobile>
          <FilterToggle onClick={() => setShowFilters((prev) => !prev)}>
            Filters
          </FilterToggle>
          {showFilters && (
            <>
              <ButtonLink href={"/characters"} text="Characters" />
              <ButtonLink href={"/episodes"} text="Episodes" />
              <ButtonLink href={"/"} text="Reset Filters" />
            </>
          )}
        </FiltersMobile>
      </FilterOption>
    </FilterWrapper>
  );
};

export default Filter;
