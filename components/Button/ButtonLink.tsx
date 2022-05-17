import Link from 'next/link';
import { ButtonElement } from './styles';
import { ButtonProps } from '../../interfaces';

const ButtonLink = ({ text, href }: ButtonProps) => (
    <ButtonElement>
        <Link href={href}>{text}</Link>
    </ButtonElement>
);

export default ButtonLink;
