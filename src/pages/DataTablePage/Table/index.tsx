import * as React from "react";
import MUIDataTable from "mui-datatables";
import { Book } from "services/";

interface Props {
  books: Book[];
}

export const Table: React.FC<Props> = (props) => {
  const columns = [
    { name: "isbn", label: "ISBN", options: { filter: true, sort: false } },
    { name: "title", label: "도서명", options: { filter: true, sort: true } },
    { name: "author", label: "저자", options: { filter: true, sort: true } },
    {
      name: "publisher",
      label: "출판사",
      options: { filter: true, sort: true },
    },
    {
      name: "datetime",
      label: "출판일",
      options: { filter: false, sort: true },
    },
    {
      name: "status",
      label: "판매상태",
      options: { filter: true, sort: true },
    },
    { name: "price", label: "정가", options: { filter: false, sort: true } },
  ];

  const options = {
    elevation: 0,
    filter: false,
    print: false,
    viewColumns: false,
    filterType: "checkbox",
    downloadOptions: { filename: "도서 견적서.csv" },
    onDownload: (buildHead, buildBody, columns, data) => {
      return "\uFEFF" + buildHead(columns) + buildBody(data);
    },
    responsive: "scrollMaxHeight",
    tableBodyHeight: "60vh",
  };

  return (
    <MUIDataTable
      title="도서 견적 목록"
      data={props.books}
      columns={columns}
      options={options}
    />
    // </MuiThemeProvider>
  );
};
