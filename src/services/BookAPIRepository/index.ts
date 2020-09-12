import axios from "axios";
import { Book } from "./Book";

const HOST: string = "https://dapi.kakao.com";
const AUTH_KEY: string = process.env.API_AUTH_KEY;

export async function fetchBooksByTitle(
  title: string,
  callback: (books: Book[]) => void
) {
  /* API Settings */
  const pageLimit = 1;
  const size = 5;
  const url: string = "/v3/search/book";
  const parameter: string = `target=title&query=${title}&page=${pageLimit}&size=${size}`;
  /* Call API */
  const response = await axios.get(`${HOST}${url}?${parameter}`, {
    headers: {
      Authorization: `KakaoAK ${AUTH_KEY}`,
    },
  });
  const documents = response.data.documents;
  callback(documents.map((json) => Book.fromJson(json)));
}

export { Book } from "./Book";
