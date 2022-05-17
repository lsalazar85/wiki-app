
import { ButtonForm } from './styles';
import { ButtonFormProps } from '../../interfaces';

const Button = ({ text }: ButtonFormProps ) => (
  <ButtonForm>{text}</ButtonForm>
);

export default Button;
