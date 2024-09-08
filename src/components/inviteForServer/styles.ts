import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 2rem;
  position: relative;

  @media (max-width: 660px) {
    flex-direction: column;
    padding: 0px 1rem;
    gap: 2rem;
  }
`;

export const WapperText = styled.div`
  max-width: 50%;

  @media (max-width: 660px) {
    max-width: 90%;
  }
`;

export const Title = styled.h1`
  font-size: 157.5%;
`;

export const Text = styled.p`
  font-size: 127.5%;
  font-weight: 300;
`;

export const Button = styled.button`
  width: 90%;
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

export const WapperIcon = styled.div`
  position: relative;
`;
