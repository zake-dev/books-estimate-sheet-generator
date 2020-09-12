import * as React from "react";
import { Typography, GridList } from "@material-ui/core";
import { useLocation, RouteComponentProps } from "react-router-dom";
import MainAppBar from "components/MainAppBar";
import { PageWrapper, ContentWrapper } from "components/Wrappers";
import { BookSelectionBoard } from "./styles";
import { BookCard } from "./BookCard";
import { Book, fetchBooksByTitle } from "services/";
import { BoardTitle } from "./BoardTitle";
import { BottomNavigation } from "./BottomNavigation";

interface Props extends RouteComponentProps {}

export const SearchPage: React.FC<Props> = ({ history }) => {
  const location = useLocation();
  const titles: string[] = location.state["titles"];
  const [count, setCount] = React.useState(1);
  const [selected, setSelected] = React.useState("");
  const [books, setBooks] = React.useState([]);
  const [searchResult, setSearchResult] = React.useState(null);

  React.useEffect(() => {
    fetchBooksByTitle(titles[count - 1], setSearchResult);
  }, []);

  return (
    <PageWrapper>
      <MainAppBar />
      <ContentWrapper>
        <BoardTitle title={titles[count - 1]} />
        <BookSelectionBoard elevation={0}>
          {searchResult !== null && searchResult.length > 0 && (
            <GridList
              cols={2.5}
              style={{ flexWrap: "nowrap", transform: "translateZ(0)" }}
            >
              {searchResult.map((book: Book, index: number) => (
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
          {(searchResult === null || searchResult.length == 0) && (
            <Typography
              align="center"
              variant="h5"
              style={{ fontWeight: "bold", color: "#cccccc" }}
            >
              도서를 찾을 수 없습니다
            </Typography>
          )}
        </BookSelectionBoard>
        <BottomNavigation
          count={count}
          max={titles.length}
          books={books}
          titles={titles}
          selected={selected}
          searchResult={searchResult}
          history={history}
          setCount={setCount}
          setBooks={setBooks}
          setSelected={setSelected}
          setSearchResult={setSearchResult}
        />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default SearchPage;
