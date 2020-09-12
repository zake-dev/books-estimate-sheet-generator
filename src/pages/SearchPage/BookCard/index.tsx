import * as React from "react";
import { GridListTile, Typography, Chip } from "@material-ui/core";
import { Book } from "services/";
import { StyledCard, CardButtonArea, Content, Image } from "./styles";
import { ThemeContext } from "styled-components";

interface Props {
  id: string;
  book: Book;
  current: string;
  isSelected: (key: string) => void;
}

export const BookCard: React.FC<Props> = (props) => {
  const theme = React.useContext(ThemeContext);

  const clippedText = (text: string, max: number): string => {
    if (text.length > max) return `${text.substr(0, max - 3)}...`;
    return text;
  };

  const getChipColor = (status: string) => {
    switch (status) {
      case "정상판매":
        return "#89d56b";
      case "품절":
        return "#f8d529";
      case "절판":
        return "#f84b29";
      default:
        return "#cccccc";
    }
  };

  return (
    <GridListTile>
      <StyledCard id={props.id} current={props.current}>
        <CardButtonArea
          onClick={(e) => props.isSelected(props.id)}
          style={{ padding: 8 }}
        >
          <Content>
            <Image image={props.book.thumbnail} />
            <Typography style={theme.textStyle.subTitle}>
              {clippedText(props.book.title, 18)}
            </Typography>
            <Typography style={theme.textStyle.body}>
              {clippedText(
                `${props.book.author} | ${props.book.publisher}`,
                20
              )}
            </Typography>
            <Typography style={theme.textStyle.accent}>
              {props.book.price.toLocaleString()} 원
            </Typography>
            <Chip
              size="small"
              label={props.book.status ? props.book.status : "알수없음"}
              style={{
                backgroundColor: getChipColor(props.book.status),
                color: "white",
                letterSpacing: -1,
                margin: "8px 0 0 0",
              }}
            />
          </Content>
        </CardButtonArea>
      </StyledCard>
    </GridListTile>
  );
};
