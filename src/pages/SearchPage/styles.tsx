import { Paper } from "@material-ui/core";
import styled from "styled-components";

export const BookSelectionBoard = styled(Paper)`
  && {
    height: 50vh;
    width: 80vw;
    min-height: 350px;
    max-width: 650px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 16px;
    background-color: #eeeeee;
  }
`;
