import * as React from "react";
import { Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import MainAppBar from "components/MainAppBar";
import { PageWrapper, ContentWrapper } from "components/Wrappers";

export const SearchPage: React.FC = () => {
  const location = useLocation();
  const titles: string[] = location.state["titles"];

  return (
    <PageWrapper>
      <MainAppBar />
      <ContentWrapper>
        <Typography variant="h6">{titles}</Typography>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default SearchPage;
