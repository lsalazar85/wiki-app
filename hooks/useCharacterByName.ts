import { useInfiniteQuery } from 'react-query';
import { getFetchingDataByName } from '../services/getFetchingDataByName'

export const useCharacterByName = (name: string) => {
    const result = useInfiniteQuery(
        ['character-by-name', name],
        ({ pageParam = 1 }) => getFetchingDataByName(pageParam, `${name}`),
        {
            getNextPageParam: (lastPage, pages) => {
                if (lastPage.info.next) return pages.length + 1;
            },
        }
    );

    return { ...result };
};
