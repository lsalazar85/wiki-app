import { useState } from 'react';

import List from '../../components/List';
import EpisodeCard from '../../components/Card/EpisodeCard';
import Loader from '../../components/Loader';

import { useEpisodesByPage } from '../../hooks/useEpisodesByPage';
import { handleScroll, setNewEpisodeData } from '../../utils';

const Episodes = () => {
  const [gridItems, setGridItems] = useState<number>(10);

  const { data, fetchNextPage, isLoading } = useEpisodesByPage('episode');

  const flatEpisodesData = data?.pages.flatMap((episode) =>
    setNewEpisodeData(episode.results)
  );

  const handleAddGrids = () => setGridItems(gridItems + 20);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <List onScroll={(e) => handleScroll(e, handleAddGrids, fetchNextPage)}>
      <>
        {flatEpisodesData?.slice(0, gridItems).map((data) => (
          <EpisodeCard key={data.id} data={data} />
        ))}
      </>
    </List>
  );
};

export default Episodes;
