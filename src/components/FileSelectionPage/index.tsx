import * as React from "react";
import MainAppBar from "components/MainAppBar";
import {
  FileSelectionPageContainer,
  FileSelectionBox,
  StyledButton,
} from "./style";
import FileSelectionTextField from "./FileSelectionTextField";

const FileSelectionPage: React.FC = () => {
  return (
    <FileSelectionPageContainer>
      <MainAppBar />
      <FileSelectionBox>
        <FileSelectionTextField />
        <StyledButton>도서검색</StyledButton>
      </FileSelectionBox>
    </FileSelectionPageContainer>
  );
};

export default FileSelectionPage;
