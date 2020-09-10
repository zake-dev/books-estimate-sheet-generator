import styled from "styled-components";
import { Button } from "@material-ui/core";

export const FileSelectionPageContainer = styled.div`
  && {
    display: flex;
    flex-direction: column;

    width: 100vw;
    height: 100vh;
  }
`;

export const FileSelectionBox = styled.div`
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
    padding: 8px 8px;

    border-radius: 30px;
    background-color: ${(props) => props.theme.color.main};
    color: #ffffff;
  }

  &:hover {
    background-color: ${(props) => props.theme.color.dark} !important;
  }

  & span {
    font-weight: bold;
  }
`;
