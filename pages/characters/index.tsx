import { useState } from 'react';

import List from '../../components/List';
import Index from '../../components/Card/CharacterCard';
import Loader from '../../components/Loader';

import { useCharactersByPage } from '../../hooks/useCharactersByPage';

import { handleScroll, setNewCharacterData } from '../../utils';

const Characters = () => {
  const [gridItems, setGridItems] = useState<number>(10);
  const { data, fetchNextPage, isLoading } = useCharactersByPage('character');

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
          <Index key={data.id} data={data} />
        ))}
      </>
    </List>
  );
};

export default Characters;
