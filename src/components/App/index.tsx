import * as React from "react";
import { CssBaseline, AppBar, Toolbar, Typography } from "@material-ui/core";
import FileSelectionRoute from "components/FileSelectionRoute";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">도서견적서 작성도우미</Typography>
        </Toolbar>
      </AppBar>
      <FileSelectionRoute />
    </>
  );
};

export default App;