
import { ButtonFormWrapper } from '../styles';
import { ButtonFormProps } from '../../../interfaces';

const ButtonForm = ({ text }: ButtonFormProps ) => (
  <ButtonFormWrapper>{text}</ButtonFormWrapper>
);

export default ButtonForm;
