import IconDiamond from "../../assets/icons/icon-diamond";
import * as S from "./styles";

type CardProps = {
  title: string;
  content: string;
  icon: JSX.Element;
};
export const Card = ({ title, content, icon }: CardProps) => {
  return (
    <S.CardWrapper>
      <S.CardContainer>
        <S.CardContent>
          {icon ? icon : <IconDiamond />}
          <S.CardTitle>{title}</S.CardTitle>
          <S.CardDescription>{content}</S.CardDescription>
        </S.CardContent>
      </S.CardContainer>
    </S.CardWrapper>
  );
};
