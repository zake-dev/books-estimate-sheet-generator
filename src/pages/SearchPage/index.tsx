import * as React from "react";
import { Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import MainAppBar from "components/MainAppBar";
import { PageWrapper, ContentWrapper } from "components/Wrappers";
import { BookSelectionBoard } from "./styles";

export const SearchPage: React.FC = () => {
  const location = useLocation();
  const titles: string[] = location.state["titles"];

  return (
    <PageWrapper>
      <MainAppBar />
      <ContentWrapper>
        <BookSelectionBoard elevation={0}>
          <Typography variant="h6">테스트</Typography>
        </BookSelectionBoard>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default SearchPage;
