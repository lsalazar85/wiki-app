import { useState } from "react";

import List from "../../components/List";
import CharacterCard from "../../components/Card/CharacterCard";
import Loader from "../../components/Loader";

import { useInfinityScrollPage } from "../../hooks/useInfinityScrollPage";

import { handleScroll, setNewCharacterData } from "../../utils";

const Characters = () => {
  const [gridItems, setGridItems] = useState<number>(10);
  const { data, fetchNextPage, isLoading } = useInfinityScrollPage(
    "characters-pages",
    "character"
  );

  const flatCharactersData = data?.pages.flatMap((character) =>
    setNewCharacterData(character.results)
  );

  const handleAddGrids = () => setGridItems(gridItems + 20);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <List onScroll={(e) => handleScroll(e, handleAddGrids, fetchNextPage)}>
      <>
        {flatCharactersData?.slice(0, gridItems).map((data) => (
          <CharacterCard key={data.id} data={data} />
        ))}
      </>
    </List>
  );
};

export default Characters;
