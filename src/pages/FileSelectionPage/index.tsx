import * as React from "react";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { RouteComponentProps } from "react-router-dom";

import MainAppBar from "components/MainAppBar";
import { PageWrapper, ContentWrapper } from "components/Wrappers";
import { StyledButton } from "./style";
import FileSelectionInput from "./FileSelectionInput";
import { ExcelIO } from "services/";

interface Props extends RouteComponentProps {}

const FileSelectionPage: React.FC<Props> = ({ history }) => {
  const [file, setFile] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [titles, setTitles] = React.useState(null);

  const handleFile = (fileUploaded) => {
    if (!fileUploaded) return;
    /* Validation */
    const extension = fileUploaded.name.split(".")[1];
    if (extension !== "xls" && extension !== "xlsx") {
      setOpen(true);
      return;
    }
    setFile(fileUploaded);
    ExcelIO.getTitles(fileUploaded, setTitles);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    /* Fetch book data */
    history.push({ pathname: "/search", state: { titles: titles } });
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <PageWrapper>
      <MainAppBar />
      <ContentWrapper>
        <FileSelectionInput
          fileName={file ? file.name : "Excel 파일 업로드..."}
          handleFile={handleFile}
        />
        <StyledButton disabled={titles === null} onClick={handleClick}>
          도서검색
        </StyledButton>
      </ContentWrapper>

      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Excel 파일을 업로드해주세요!
        </Alert>
      </Snackbar>
    </PageWrapper>
  );
};

export default FileSelectionPage;
