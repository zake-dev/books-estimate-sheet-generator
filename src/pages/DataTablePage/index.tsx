import * as React from "react";
import { RouteComponentProps, useLocation } from "react-router-dom";
import { Container } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import MainAppBar from "components/MainAppBar";
import { PageWrapper, ContentWrapper } from "components/Wrappers";
import { Book, ExcelIO } from "services/";
import { Table } from "./Table";
import { StyledButton } from "./styles";

interface Props extends RouteComponentProps {}

export const DataTablePage: React.FC<Props> = ({ history }) => {
  const location = useLocation();
  const books: Book[] = location.state["books"];

  const handleExport = (event: React.MouseEvent<HTMLElement>) =>
    ExcelIO.saveBooks(books);

  const handlePushToHome = (event: React.MouseEvent<HTMLElement>) => {
    history.push("/");
  };

  return (
    <PageWrapper>
      <MainAppBar />
      <ContentWrapper>
        <Table books={books} />
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <StyledButton onClick={handleExport}>
            <GetAppIcon />
          </StyledButton>
          <StyledButton onClick={handlePushToHome}>처음으로</StyledButton>
        </Container>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default DataTablePage;
