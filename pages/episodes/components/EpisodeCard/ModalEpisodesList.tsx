import { DetailsList, DetailText } from '../../../../components/Card/styles';
import { ModalListProps } from '../../../../interfaces'
import { useEpisodesByCharacter } from '../../../../hooks/useEpisodesByCharacter'

const ModalEpisodesList = ({ id }: ModalListProps) => {
  const { data } = useEpisodesByCharacter(`${id}`)

  return (
    <DetailsList>
      <DetailText>Episode Nro: {data?.episode}</DetailText>
      <DetailText>Episode Name: {data?.name}</DetailText>
      <DetailText>Air Date: {data?.air_date}</DetailText>
    </DetailsList>
  );
};

export default ModalEpisodesList;
