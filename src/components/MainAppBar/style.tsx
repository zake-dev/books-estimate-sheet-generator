import styled from "styled-components";
import { AppBar } from "@material-ui/core";

export const StyledAppBar = styled(AppBar)`
  && {
    position: static;
    align-items: center;

    width: 100vw;
  }
`;

export const Title = styled.span`
  && {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
