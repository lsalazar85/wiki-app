import { useInfiniteQuery } from "react-query";
import { getFetchingDataByPage } from "../services/getFetchingDataByPage";

export const useInfinityScrollPage = (query: string, type: string) => {
  const result = useInfiniteQuery(
    [`${query}`],
    ({ pageParam = 1 }) => getFetchingDataByPage(pageParam, `${type}`),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.info.next) return pages.length + 1;
      },
    }
  );

  return { ...result };
};
