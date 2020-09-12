import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import styled from "styled-components";

interface CardProps {
  id: string;
  current: string;
}

export const StyledCard = styled(Card)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 320px;
    width: 240px;

    margin: 8px;

    border: ${(props: CardProps) =>
      props.current == props.id ? "3px solid #3f51b5" : "none"};
  }
`;

export const CardButtonArea = styled(CardActionArea)`
  flex-grow: 1;
`;

export const Content = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 0px;
  margin: 0px;
`;

export const Image = styled(CardMedia)`
  && {
    width: 120px;
    height: 174px;

    margin: 0px 0px 8px 0px;
  }
`;
