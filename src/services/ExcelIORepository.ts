import * as XLSX from "xlsx";

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
