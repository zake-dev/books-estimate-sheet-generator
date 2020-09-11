import styled from "styled-components";
import { Button } from "@material-ui/core";

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
