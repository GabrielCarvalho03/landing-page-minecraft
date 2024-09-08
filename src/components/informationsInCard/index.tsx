import IconDiamond from "../../assets/icons/icon-diamond";
import IconOpen from "../../assets/icons/icon-open";
import IconEasy from "../../assets/icons/icon.easy";
import { Card } from "../card";
import * as S from "./styles";

export const InformationsInCard = () => {
  return (
    <S.Container id="informationsCard">
      <Card
        title="VIP plans"
        content="Elevate your Minecraft experience with a variety of premium features and benefits designed to enhance your gameplay."
        icon={<IconDiamond />}
      />
      <Card
        title="Open 24h"
        content="Our Minecraft server is online 24h! storyline of uninterrupted gameplay anytime."
        icon={<IconOpen />}
      />
      <Card
        title="Easy Access"
        content="Our Minecraft server is designed to be easy to access, ensuring you can jump in and play without any hassle."
        icon={<IconEasy />}
      />
    </S.Container>
  );
};
