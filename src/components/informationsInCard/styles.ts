import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  justify-content: space-around;
  align-items: center;
  padding: 6rem 0;
  @media (max-width: 878px) {
    gap: 3rem;
    flex-direction: column;
    padding-bottom: 5rem;
  }
`;
