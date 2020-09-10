import * as React from "react";
import { TextField, Button } from "@material-ui/core";
import MainAppBar from "components/MainAppBar";

const FileSelectionPage: React.FC = () => {
  return (
    <>
      <MainAppBar />
      <TextField label="Excel 파일.." />
      <Button>불러오기</Button>
    </>
  );
};

export default FileSelectionPage;
