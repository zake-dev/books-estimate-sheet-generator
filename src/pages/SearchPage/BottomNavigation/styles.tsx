import { Button, Typography } from "@material-ui/core";
import styled from "styled-components";

export const BottomNavBar = styled.div`
  && {
    width: 80vw;
    max-width: 650px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 16px 0px;
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
    font-size: 14px;
    font-weight: bold;
  }

  &:hover {
    background-color: ${(props) => props.theme.color.dark} !important;
  }
`;

export const Instruction = styled(Typography)`
  && {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 2px;
    color: #cccccc;
  }
`;
