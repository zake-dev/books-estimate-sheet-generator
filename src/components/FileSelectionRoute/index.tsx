import * as React from "react";
import { AppBar, Toolbar, Typography, TextField, Button } from "@material-ui/core";

const FileSelectionRoute: React.FC = () => {
  return (
    <>
      <TextField label="Excel 파일.." />
      <Button>불러오기</Button>
    </>
  );
};

export default FileSelectionRoute;