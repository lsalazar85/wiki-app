import { Character, Episode } from '../types';
import { UIEvent } from 'react';

export interface HeaderProps {
  urlLogo: string;
  text: string;
}

export interface ListProps {
  children: JSX.Element | JSX.Element[];
  onScroll: (event: UIEvent<HTMLDivElement>) => void;
}

export interface CharacterCardProps {
  data: Character;
}

export interface EpisodeCardProps {
  data: Episode;
}

export interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export interface ButtonProps {
  text: string;
  href: string;
}

export interface ButtonFormProps {
  text: string
}

export interface ModalListProps {
  id: string;
}
