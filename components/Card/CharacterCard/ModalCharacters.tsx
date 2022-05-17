import { DetailsList, DetailText } from '../styles';
import { useCharactersByEpisode } from '../../../hooks/useCharactersByEpisode';

interface ModalListProps {
  id: string;
}

const ModalCharactersList = ({ id }: ModalListProps) => {
  const { data } = useCharactersByEpisode(id);

  return (
    <DetailsList>
      <DetailText>{data?.name}</DetailText>
    </DetailsList>
  );
};

export default ModalCharactersList;
