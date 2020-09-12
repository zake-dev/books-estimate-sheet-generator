import * as React from "react";
import { Typography, GridList } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import MainAppBar from "components/MainAppBar";
import { PageWrapper, ContentWrapper } from "components/Wrappers";
import { BookSelectionBoard } from "./styles";
import { BookCard } from "./BookCard";
import { Book, fetchBooksByTitle } from "services/";
import { BoardTitle } from "./BoardTitle";

export const SearchPage: React.FC = () => {
  const location = useLocation();
  const [count, setCount] = React.useState(1);
  const [selected, setSelected] = React.useState("");
  const [books, setBooks] = React.useState(null);
  const titles: string[] = location.state["titles"];

  React.useEffect(() => {
    fetchBooksByTitle(titles[count - 1], setBooks);
  }, []);

  return (
    <PageWrapper>
      <MainAppBar />
      <ContentWrapper>
        <BoardTitle current={count} max={titles.length} />
        <BookSelectionBoard elevation={0}>
          {books !== null && (
            <GridList
              cols={2.5}
              style={{ flexWrap: "nowrap", transform: "translateZ(0)" }}
            >
              {books.map((book: Book, index: number) => (
                <BookCard
                  book={book}
                  key={index}
                  id={book.thumbnail}
                  current={selected}
                  isSelected={setSelected}
                />
              ))}
            </GridList>
          )}
          {books === null && <Typography>도서를 찾을 수 없습니다</Typography>}
        </BookSelectionBoard>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default SearchPage;
