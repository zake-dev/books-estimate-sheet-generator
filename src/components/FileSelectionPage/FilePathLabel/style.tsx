import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const StyledPaper = styled(Paper)`
  && {
    display: flex;
    align-items: center;

    height: 50px;
    width: 80vw;
    max-width: 400px;
    margin: 16px 16px;
    padding: 8px 24px;

    border: 2px solid ${(props) => props.theme.color.main};
    border-radius: 30px;
    color: ${(props) => props.theme.color.main};
  }
`;
