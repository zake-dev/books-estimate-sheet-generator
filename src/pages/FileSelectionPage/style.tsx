import styled from "styled-components";
import { Button } from "@material-ui/core";

export const PageContainer = styled.div`
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

export const StyledButton = styled(Button)`
  && {
    padding: 8px 16px;

    border: ${(props) => (props.disabled ? "2px solid" : "none")};
    border-radius: 30px;
    background-color: ${(props) =>
      props.disabled ? props.theme.color.white : props.theme.color.main};
    color: ${(props) =>
      props.disabled
        ? props.theme.color.grey
        : props.theme.color.white} !important;
  }

  &:hover {
    background-color: ${(props) => props.theme.color.dark} !important;
  }

  & span {
    font-weight: bold;
  }
`;
