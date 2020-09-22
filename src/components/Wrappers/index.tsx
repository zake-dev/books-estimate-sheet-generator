import styled from "styled-components";

export const PageWrapper = styled.div`
  && {
    display: flex;
    flex-direction: column;

    width: 100vw;
    height: 100vh;
  }
`;

export const ContentWrapper = styled.div`
  && {
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
`;
