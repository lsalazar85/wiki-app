import { useInfiniteQuery } from 'react-query';
import { getFetchingDataByPage } from '../services/getFetchingDataByPage';

export const useEpisodesByPage = (type: string) => {
  const result = useInfiniteQuery(
    ['episodes-pages'],
    ({ pageParam = 1 }) => getFetchingDataByPage(pageParam, `${type}`),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.info.next) return pages.length + 1;
      },
    }
  );

  return { ...result };
};
