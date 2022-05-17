import { useQuery } from 'react-query';
import axios from 'axios';
import { URL_API } from '../constants/urls';

export const useEpisodesByCharacter = (id: string) => {
  const result = useQuery(`episode-${id}`, async () => {
    const { data } = await axios.get(
      `${URL_API}episode/${id}`
    );
    return data;
  });

  return { ...result };
};
