import * as React from "react";
import { Typography } from "@material-ui/core";
import { StyledPaper } from "./style";

const FilePathLabel: React.FC = () => {
  return (
    <StyledPaper elevation={0} variant="outlined">
      <Typography>Excel 파일을 불러와주세요...</Typography>
    </StyledPaper>
  );
};

export default FilePathLabel;
