import * as React from "react";
import { BottomNavBar, StyledButton, Instruction } from "./styles";
import { Book, fetchBooksByTitle } from "services/";

interface Props {
  count: number;
  max: number;
  titles: string[];
  selected: string;
  books: Book[];
  searchResult: Book[];
  history: any;
  setCount: (n: number) => void;
  setBooks: (books: Book[]) => void;
  setSelected: (thumbnail: string) => void;
  setSearchResult: (books: Book[]) => void;
}

export const BottomNavigation: React.FC<Props> = (props) => {
  const fetchNext = () => {
    if (props.count < props.max) {
      props.setCount(props.count + 1);
      fetchBooksByTitle(props.titles[props.count], props.setSearchResult);
    }
  };

  const handleSelect = (event: React.MouseEvent<HTMLElement>) => {
    /* Skip handle */
    if (props.searchResult?.length === 0) {
      props.setBooks([...props.books, new Book(props.titles[props.count - 1])]);
      fetchNext();
      return;
    }

    /* Find selected Book */
    let selectedBook: Book;
    for (let book of props.searchResult) {
      if (book.thumbnail === props.selected) {
        selectedBook = book;
        break;
      }
    }

    /* Handle last selection*/
    if (props.count === props.max) {
      props.history.push({
        pathname: "/result",
        state: { books: [...props.books, selectedBook] },
      });
    }

    /* else, add selected book into list, reset selection*/
    props.setBooks([...props.books, selectedBook]);
    props.setSelected("");
    fetchNext();
  };

  return (
    <BottomNavBar>
      <Instruction>
        견적서에 포함할 도서를 선택해주세요 ({props.count}/{props.max})
      </Instruction>
      <StyledButton
        disabled={props.selected === "" && props.searchResult?.length > 0}
        onClick={handleSelect}
      >
        {props.searchResult?.length > 0 ? "선택하기" : "건너뛰기"}
      </StyledButton>
    </BottomNavBar>
  );
};
