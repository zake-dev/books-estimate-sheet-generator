import * as React from "react";
import { RouteComponentProps, useLocation } from "react-router-dom";
import MainAppBar from "components/MainAppBar";
import { PageWrapper, ContentWrapper } from "components/Wrappers";
import { Book } from "services/";
import { Table } from "./Table";
import { StyledButton } from "./styles";

interface Props extends RouteComponentProps {}

export const DataTablePage: React.FC<Props> = ({ history }) => {
  const location = useLocation();
  const books: Book[] = location.state["books"];

  const handlePushToHome = (event: React.MouseEvent<HTMLElement>) => {
    history.push("/");
  };

  return (
    <PageWrapper>
      <MainAppBar />
      <ContentWrapper>
        <Table books={books} />
        <StyledButton onClick={handlePushToHome}>처음으로</StyledButton>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default DataTablePage;
