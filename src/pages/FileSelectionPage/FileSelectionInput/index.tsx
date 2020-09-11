import * as React from "react";
import { Typography, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import { StyledPaper } from "./style";
import { ThemeContext } from "styled-components";

interface Props {
  fileName: string;
  handleFile: (fileUploaded) => void;
}

const FileSelectionInput: React.FC<Props> = (props) => {
  const theme = React.useContext(ThemeContext);
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };

  return (
    <StyledPaper elevation={0} variant="outlined">
      <IconButton style={{ padding: 8 }} onClick={handleClick}>
        <SearchOutlined style={{ color: theme.color.main }} />
      </IconButton>
      <Typography>{props.fileName}</Typography>
      <input
        type="file"
        accept=".xls, .xlsx"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </StyledPaper>
  );
};

export default FileSelectionInput;
