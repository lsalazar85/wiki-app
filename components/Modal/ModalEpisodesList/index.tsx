import { DetailsList, DetailText } from "../../Card/styles";
import { ModalListProps } from "../../../interfaces";
import { useArrayUrls } from "../../../hooks/useShowArrayUrls";

const ModalEpisodesList = ({ id }: ModalListProps) => {
  const { data } = useArrayUrls('episode-characters',`${id}`,'episode');

  return (
    <DetailsList>
      <DetailText>Episode Nro: {data?.episode}</DetailText>
      <DetailText>Episode Name: {data?.name}</DetailText>
      <DetailText>Air Date: {data?.air_date}</DetailText>
    </DetailsList>
  );
};

export default ModalEpisodesList;
