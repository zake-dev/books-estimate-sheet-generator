import * as React from "react";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import MainAppBar from "components/MainAppBar";
import {
  FileSelectionPageContainer,
  FileSelectionBox,
  StyledButton,
} from "./style";
import FileSelectionInput from "./FileSelectionInput";

const FileSelectionPage: React.FC = () => {
  const [file, setFile] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleFile = (fileUploaded) => {
    setFile(fileUploaded);
  };

  const handleClick = async (event: React.MouseEvent<HTMLElement>) => {
    /* Validation */
    const extension = file?.name.split(".")[1];
    if (!file || (extension !== "xls" && extension !== "xlsx")) {
      setOpen(true);
    }
    /* Fetch book data */
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <FileSelectionPageContainer>
      <MainAppBar />
      <FileSelectionBox>
        <FileSelectionInput
          fileName={file ? file.name : "Excel 파일 업로드..."}
          handleFile={handleFile}
        />
        <StyledButton onClick={handleClick}>도서검색</StyledButton>
      </FileSelectionBox>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Excel 파일을 업로드해주세요!
        </Alert>
      </Snackbar>
    </FileSelectionPageContainer>
  );
};

export default FileSelectionPage;
