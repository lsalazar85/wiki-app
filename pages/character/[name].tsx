import { useState } from 'react';
import { useRouter } from 'next/router';

import Loader from '../../components/Loader';
import List from '../../components/List';
import CharacterCard from '../../components/Card/CharacterCard';

import { useCharacterByName } from '../../hooks/useCharacterByName';
import { handleScroll, setNewCharacterData } from '../../utils';

import { DataNotFound } from '../../styles/styles';

const Name = () => {
  const router = useRouter();
  const { name } = router.query;
  const [gridItems, setGridItems] = useState<number>(10);
  const { data, fetchNextPage, isLoading, error } = useCharacterByName(
    `${name}`
  );

  const flatCharactersData = data?.pages.flatMap((character) =>
    setNewCharacterData(character.results)
  );

  const handleAddGrids = () => setGridItems(gridItems + 20);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <DataNotFound>Data Not Found</DataNotFound>;
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

export default Name;
