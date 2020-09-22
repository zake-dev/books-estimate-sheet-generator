import styled from "styled-components";
import { Button } from "@material-ui/core";

export const StyledButton = styled(Button)`
  && {
    margin: 16px 8px;
    padding: 8px 16px;

    border: ${(props) => (props.disabled ? "2px solid" : "none")};
    border-radius: 30px;
    background-color: ${(props) =>
      props.disabled ? props.theme.color.white : props.theme.color.main};
    color: ${(props) =>
      props.disabled
        ? props.theme.color.grey
        : props.theme.color.white} !important;
    font-size: 14px;
    font-weight: bold;
  }

  &:hover {
    background-color: ${(props) => props.theme.color.dark} !important;
  }
`;
