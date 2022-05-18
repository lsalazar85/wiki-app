import Image from "next/image";
import { HeaderProps } from "../../interfaces";

import { HeaderWrapper, HeaderSide, HeaderText } from "./styles";

const Header = ({ urlLogo, text }: HeaderProps) => (
  <HeaderWrapper>
    <HeaderSide style={{ cursor: "pointer" }}>
      <Image src={urlLogo} width="85" height="85" alt="Header Logo" />
    </HeaderSide>
    <HeaderSide>
      <HeaderText>{text}</HeaderText>
    </HeaderSide>
  </HeaderWrapper>
);

export default Header;
