import * as React from "react";
import { Toolbar, Typography } from "@material-ui/core";
import StyledAppBar from "./style";

const MainAppBar: React.FC = () => {
  return (
    <StyledAppBar>
      <Toolbar>
        <Typography variant="h6">도서견적서 작성도우미</Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default MainAppBar;
