import { LoaderContainer, LoaderImage } from "./styles";
import { URL_LOADER_IMG } from "../../constants/urls";

const Loader = () => (
  <LoaderContainer>
    <LoaderImage
      src={URL_LOADER_IMG}
      alt="Loader Icon"
      layout="intrinsic"
      width={170}
      height={170}
    />
  </LoaderContainer>
);

export default Loader;
