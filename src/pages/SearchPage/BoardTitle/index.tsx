import * as React from "react";
import { TitleWrapper, Title } from "./styles";

interface Props {
  title: string;
}

export const BoardTitle: React.FC<Props> = (props) => {
  return (
    <TitleWrapper>
      <Title>
        검색 도서 -{" "}
        {props.title.length > 25
          ? `${props.title.substr(0, 22)}...`
          : props.title}
      </Title>
    </TitleWrapper>
  );
};
