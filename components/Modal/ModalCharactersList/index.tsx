import { DetailsList, DetailText } from "../../Card/styles";
import { useArrayUrls } from "../../../hooks/useShowArrayUrls";

import { ModalListProps } from "../../../interfaces";

const ModalCharactersList = ({ id }: ModalListProps) => {
  const { data } = useArrayUrls("character-episode", `${id}`, "character");

  return (
    <DetailsList>
      <DetailText>{data?.name}</DetailText>
    </DetailsList>
  );
};

export default ModalCharactersList;
