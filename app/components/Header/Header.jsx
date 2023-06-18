"use client";
import ArrowDown from "@/public/assets/icons/ArrowDown";
import CrescentIcon from "@/public/assets/icons/CrescentIcon";
import NotificationIcon from "@/public/assets/icons/NotificationIcon";
import {
  HeaderWrapper,
  Badge,
  Switcher,
  UserMenu,
  UserImage,
  TitleDiv,
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <Badge>Individual Investor</Badge>
      <CrescentIcon style={{ marginRight: "10px" }} />
      <NotificationIcon style={{ marginRight: "10px" }} />
      <Switcher>
        <span>EN</span>
        <span>ع</span>
      </Switcher>
      <UserMenu>
        <UserImage>BA</UserImage>
        <div>
          <h6>Welcome</h6>
          <TitleDiv>
            <h3>Bader Alobaidi</h3>
            <ArrowDown style={{ marginLeft: "10px" }} />
          </TitleDiv>
        </div>
      </UserMenu>
    </HeaderWrapper>
  );
};

export default Header;
