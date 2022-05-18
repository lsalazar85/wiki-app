import { DetailsList, DetailText } from '../../../../components/Card/styles';
import { useCharactersByEpisode } from '../../../../hooks/useCharactersByEpisode';
import { ModalListProps } from '../../../../interfaces'

const ModalCharactersList = ({ id }: ModalListProps) => {
  const { data } = useCharactersByEpisode(id);

  return (
    <DetailsList>
      <DetailText>{data?.name}</DetailText>
    </DetailsList>
  );
};

export default ModalCharactersList;
