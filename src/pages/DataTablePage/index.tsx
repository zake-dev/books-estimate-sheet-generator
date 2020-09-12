import * as React from "react";
import { Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import MainAppBar from "components/MainAppBar";
import { PageWrapper, ContentWrapper } from "components/Wrappers";
import { Book } from "services/";
import { Table } from "./Table";

interface Props {}

export const DataTablePage: React.FC<Props> = (props) => {
  const location = useLocation();
  const books: Book[] = location.state["books"];

  return (
    <PageWrapper>
      <MainAppBar />
      <ContentWrapper>
        <Table books={books} />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default DataTablePage;
