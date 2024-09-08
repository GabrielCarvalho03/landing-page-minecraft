import * as S from "./styles";

export const Hero = () => {
  return (
    <S.HeroContainer>
      <S.WapperNavigation>
        <S.Title
          pointer
          size="122"
          onClick={() => (window.location.href = "#informationsCard")}
        >
          About
        </S.Title>

        <S.Title
          pointer
          size="122"
          onClick={() => (window.location.href = "#inviteServer")}
        >
          Invite
        </S.Title>
      </S.WapperNavigation>

      <S.WapperTextsAndButton>
        <S.Title>Come be part of the best server</S.Title>

        <S.Description>
          Come explore, build and have fun in a friendly and adventurous
          environment. Our server is always online, ensuring you can play at any
          time of the day or night.
        </S.Description>

        <S.Button>Join now</S.Button>
      </S.WapperTextsAndButton>
    </S.HeroContainer>
  );
};
