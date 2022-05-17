import {LoaderContainer, LoaderImage } from './styles'

const Loader = () => (
    <LoaderContainer>
      <LoaderImage
          src="/images/rick.png"
          alt="Loader Icon"
          layout="intrinsic"
          width={90}
          height={90}
      />
    </LoaderContainer>
)

export default Loader
