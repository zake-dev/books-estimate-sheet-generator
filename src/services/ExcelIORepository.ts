import * as XLSX from "xlsx";
import { Book } from "services/";

export function getTitles(file, callback: (titles: string[]) => void) {
  let reader = new FileReader();
  reader.onload = (event) => {
    let data = event.target.result;
    let workbook = XLSX.read(data, { type: "binary" });
    let worksheet = workbook.Sheets[workbook.SheetNames[0]];
    let json: object[] = XLSX.utils.sheet_to_json(worksheet, {
      header: ["title"],
    });

    callback(json.map((data) => data["title"] as string));
  };

  reader.readAsBinaryString(file);
}

export function saveBooks(books: Book[]) {
  let header = Book.getHeaders();
  let workbook = XLSX.utils.book_new();
  let worksheet = XLSX.utils.aoa_to_sheet([header]);
  XLSX.utils.sheet_add_aoa(
    worksheet,
    books.map((book: Book) => book.toArray()),
    { origin: -1 }
  );
  XLSX.utils.book_append_sheet(workbook, worksheet, "도서견적 견본");
  console.log("check");
  XLSX.writeFile(workbook, "도서견적서.xlsx");
}
