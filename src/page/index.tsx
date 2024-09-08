import { Hero } from "../components/hero";
import { InformationsInCard } from "../components/informationsInCard";
import { InviteForServer } from "../components/inviteForServer";
import * as S from "./styles";

export const Home = () => {
  return (
    <>
      <Hero />
      <InformationsInCard />
      <InviteForServer />

      <S.Footer>
        <p>© 2024 - All rights reserved</p>
      </S.Footer>
    </>
  );
};
