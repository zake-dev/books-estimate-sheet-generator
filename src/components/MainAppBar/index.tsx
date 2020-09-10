import * as React from "react";
import { Toolbar, Typography } from "@material-ui/core";
import { StyledAppBar, Title } from "./style";

const MainAppBar: React.FC = () => {
  return (
    <StyledAppBar>
      <Toolbar>
        <Title>도서견적서 작성도우미</Title>
      </Toolbar>
    </StyledAppBar>
  );
};

export default MainAppBar;
