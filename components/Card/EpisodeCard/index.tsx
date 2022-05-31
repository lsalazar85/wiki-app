import { useState } from 'react';
import { CardWrapper, CardInfo, Name, ItemInfo } from '../styles';

import Modal from '../../Modal';
import ModalCharactersList from '../../Modal/ModalCharactersList';

import { EpisodeCardProps } from '../../../interfaces';

const EpisodeCard = ({ data }: EpisodeCardProps) => {
  const [modalState, setModalState] = useState<boolean>(false);

  return (
    <CardWrapper>
      <CardInfo>
        <Name>{data.name}</Name>
        <ItemInfo>Name: {data.name}</ItemInfo>
        <ItemInfo>Air Date: {data.air_date}</ItemInfo>
        <ItemInfo>Episode: {data.episode}</ItemInfo>
        <ItemInfo cursorStyle onClick={() => setModalState((prev) => !prev)}>
          Characters in Episodes
        </ItemInfo>
      </CardInfo>
      <Modal
        visible={modalState}
        title={`Ep. ${data.name} Characters`}
        onClose={() => setModalState(false)}
      >
        {data?.characters.map((url) => {
          const urlParts = url.split('/').filter(Boolean);
          const characterId = urlParts[urlParts.length - 1];

          return (
            <ModalCharactersList
              key={`character-${characterId}`}
              id={characterId}
            />
          );
        })}
      </Modal>
    </CardWrapper>
  );
};

export default EpisodeCard;
