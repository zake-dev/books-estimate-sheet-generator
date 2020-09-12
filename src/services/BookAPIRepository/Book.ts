export class Book {
  title: string;
  author: string;
  datetime: string;
  isbn: string;
  price: number;
  publisher: string;
  status: string;
  thumbnail: string;

  constructor(
    title: string,
    author: string = "",
    datetime: string = "",
    isbn: string = "",
    price: number = 0,
    publisher: string = "",
    status: string = "",
    thumbnail: string = "no-image"
  ) {
    this.title = title;
    this.author = author;
    this.datetime = datetime;
    this.isbn = isbn;
    this.price = price;
    this.publisher = publisher;
    this.status = status;
    this.thumbnail = thumbnail;
  }

  static fromJson(json): Book {
    const datetime: string = new Date(json.datetime)
      .toISOString()
      .substr(0, 10);
    const isbn: string = json.isbn
      .split(" ")
      .reduce((a: string, b: string) => (a.length > b.length ? a : b));
    const author: string =
      json.authors.length > 1 ? `${json.authors[0]} 외` : json.authors[0];

    return new Book(
      json.title,
      author,
      datetime,
      isbn,
      json.price,
      json.publisher,
      json.status,
      json.thumbnail
    );
  }
}
