import Image from 'next/image';
import Link from 'next/link';
import { HeaderProps } from '../../interfaces';

import { HeaderWrapper, HeaderSide, HeaderText } from './styles';

const Header = ({ urlLogo, text }: HeaderProps) => (
  <HeaderWrapper>
    <HeaderSide style={{ cursor: 'pointer'}}>
      <Link href='/'>
          <Image src={urlLogo} width="85" height="85" />
      </Link>
    </HeaderSide>
    <HeaderSide>
      <HeaderText>{text}</HeaderText>
    </HeaderSide>
  </HeaderWrapper>
);

export default Header;
