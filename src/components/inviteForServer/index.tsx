import IconStevenMinecraft from "../../assets/icons/icon-steven-minecraft";
import * as S from "./styles";

export const InviteForServer = () => {
  return (
    <S.Container id="inviteServer">
      <S.WapperText>
        <S.Title>
          What are you waiting for to join the biggest server in the world and
          have a lot of fun?
        </S.Title>
        <S.Text>
          Here, you will find people from all corners of the planet, ready to
          share epic moments, participate in exciting events and create
          unforgettable memories. Don't waste time! Come have fun, make new
          friends and explore everything the server has to offer.
        </S.Text>

        <S.Button>Join now</S.Button>
      </S.WapperText>

      <S.WapperIcon>
        <IconStevenMinecraft />
      </S.WapperIcon>
    </S.Container>
  );
};
