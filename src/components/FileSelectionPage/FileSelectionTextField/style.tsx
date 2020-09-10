import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const StyledPaper = styled(Paper)`
  && {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    height: 50px;
    width: 80vw;
    max-width: 350px;
    margin: 16px 16px;
    padding: 8px 8px;

    border: 2px solid ${(props) => props.theme.color.main};
    border-radius: 30px;
    color: ${(props) => props.theme.color.main};
  }
`;
