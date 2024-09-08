import styled from "styled-components";

type StyledProps = {
  pointer?: boolean;
  size?: string;
};

export const HeroContainer = styled.div`
  margin-top: -1.2rem;
  width: 100%;
  height: 40rem;
  background-image: url("/assets/jpg/hero.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  margin-bottom: 5rem;
`;

export const WapperTextsAndButton = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h1<StyledProps>`
  font-size: ${({ size }) => (size ? size + "%" : "157.5%")};
  cursor: ${({ pointer }) => (pointer ? "pointer" : "default")};

  @media (max-width: 480px) {
    font-size: 122%;
  }
`;
export const Description = styled.p`
  max-width: 76%;
  font-size: 127.5%;
  font-weight: 300;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);

  @media (max-width: 480px) {
    font-size: 100%;
  }
`;
export const WapperNavigation = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  gap: 1rem;
`;

export const Button = styled.button`
  width: 70%;
  height: 3rem;
  border: none;
  background-color: #f2c94c;
  color: #fff;
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1rem;

  &:hover {
    background-color: red;
  }
`;
