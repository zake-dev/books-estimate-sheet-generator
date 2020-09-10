import * as React from "react";
import { Typography, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import { StyledPaper } from "./style";
import { ThemeContext } from "styled-components";

const FileSelectionTextField: React.FC = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <StyledPaper elevation={0} variant="outlined">
      <IconButton style={{ padding: 8 }}>
        <SearchOutlined style={{ color: theme.color.main }} />
      </IconButton>
      <Typography>Excel 파일을 불러와주세요...</Typography>
    </StyledPaper>
  );
};

export default FileSelectionTextField;
