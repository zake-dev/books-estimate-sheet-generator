import styled from "styled-components";

export const PageWrapper = styled.div`
  && {
    display: flex;
    flex-direction: column;

    width: 100vw;
    height: calc(100vh - 60px);
  }
`;

export const ContentWrapper = styled.div`
  && {
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
