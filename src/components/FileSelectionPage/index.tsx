import * as React from "react";
import MainAppBar from "components/MainAppBar";
import {
  FileSelectionPageContainer,
  FileSelectionBox,
  StyledButton,
} from "./style";
import FilePathLabel from "./FilePathLabel";

const FileSelectionPage: React.FC = () => {
  return (
    <FileSelectionPageContainer>
      <MainAppBar />
      <FileSelectionBox>
        <FilePathLabel />
        <StyledButton>검색</StyledButton>
      </FileSelectionBox>
    </FileSelectionPageContainer>
  );
};

export default FileSelectionPage;
