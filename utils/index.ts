import {Character, Episode} from '../types';
import {UIEvent} from 'react';

export const setNewCharacterData = (data: Character[]) => {
  return data?.map((data) => ({
    id: data.id,
    name: data.name,
    species: data.species,
    status: data.status,
    episode: data.episode,
    image: data.image,
    gender: data.gender
  }));
};


export const setNewEpisodeData = (data: Episode[]) => {
  return data?.map((data) => ({
    id: data.id,
    name: data.name,
    air_date: data.air_date,
    episode: data.episode,
    characters: data.characters
  }));
};


export const handleScroll = (event: UIEvent<HTMLDivElement> , setState: () => void, fetchNextPage: () => void ) => {
  const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

  if (scrollHeight - scrollTop === clientHeight) {
    setState();
    fetchNextPage();
  }
};
