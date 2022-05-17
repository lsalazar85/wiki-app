import { useQuery } from 'react-query';
import axios from 'axios';

import {URL_API} from '../constants/urls';

export const useCharactersByEpisode = (id: string) => {
  const result = useQuery(`character-episode-${id}`, async () => {
    const { data } = await axios.get(
        `${URL_API}character/${id}`
    );
    return data;
  });

  return { ...result };
};
