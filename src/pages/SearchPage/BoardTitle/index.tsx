import * as React from "react";
import { TitleWrapper, Title } from "./styles";

interface Props {
  current: number;
  max: number;
}

export const BoardTitle: React.FC<Props> = (props) => {
  return (
    <TitleWrapper>
      <Title>
        견적서에 포함할 도서를 선택해주세요 ({props.current}/{props.max})
      </Title>
    </TitleWrapper>
  );
};
