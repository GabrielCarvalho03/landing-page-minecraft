import styled, { keyframes } from "styled-components";

const animationBorder = keyframes`
   
   from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const CardWrapper = styled.div`
  position: relative;
  display: inline-block;

  @media (max-width: 878px) {
    padding-bottom: 5rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 300px;
  height: 400px;
  background-color: transparent;
  z-index: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: transparent;

  &::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 190%;
    z-index: -1;
    background: linear-gradient(90deg, #0047ff, #04f0a9);
    transform: rotate(45deg);
    box-sizing: border-box;
    animation: ${animationBorder} 3s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 7px;
    background-color: #222636;
  }
`;

export const CardContent = styled.div`
  position: relative;
  width: 70%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #222636;
  z-index: 1;
`;

export const CardTitle = styled.h1`
  font-size: 157.5%;
`;
export const CardDescription = styled.p`
  font-size: 127.5%;
  font-weight: 300;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
`;

export const WapperIcon = styled.div``;
