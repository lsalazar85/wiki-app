import { useState } from 'react';
import { CardWrapper, CardImage, CardInfo, Name, ItemInfo } from '../styles';

import Modal from '../../Modal';
import ModalEpisodesList from '../EpisodeCard/ModalEpisodesList';

import { CharacterCardProps } from '../../../interfaces';

const CharacterCard = ({ data }: CharacterCardProps) => {
  const [modalState, setModalState] = useState<boolean>(false);

  return (
    <CardWrapper>
      <CardImage src={data.image} alt={data.name} width={210} height={210} />
      <CardInfo>
        <Name>{data.name}</Name>
        <ItemInfo>Status: {data.status}</ItemInfo>
        <ItemInfo>Gender: {data.gender}</ItemInfo>
        <ItemInfo>Specie: {data.species}</ItemInfo>
        <ItemInfo cursorStyle onClick={() => setModalState((prev) => !prev)}>
          Character Episodes
        </ItemInfo>
      </CardInfo>
      <Modal
        visible={modalState}
        title={`${data.name} Episodes`}
        onClose={() => setModalState(false)}
      >
        {data?.episode.map((url) => {
          const urlParts = url.split('/').filter(Boolean);
          const episodeId = urlParts[urlParts.length - 1];

          return (
            <ModalEpisodesList key={`episode-${episodeId}`} id={episodeId} />
          );
        })}
      </Modal>
    </CardWrapper>
  );
};

export default CharacterCard;
