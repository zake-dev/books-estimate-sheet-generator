import { Box } from "@material-ui/core";
import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 80vw;
  max-width: 650px;
  padding: 16px;
`;

export const Title = styled(Box)`
  color: ${(props) => props.theme.color.main};
  font-weight: bold;
  font-size: 1.6rem;
  letter-spacing: -1.5px;
`;
