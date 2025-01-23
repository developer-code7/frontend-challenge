import * as XLSX from "xlsx";

export const handleFileExport = (data, fileName = "export.xlsx") => {
  try {
    if (data.length > 0) {
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.json_to_sheet(data);
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

      XLSX.writeFile(workbook, fileName);
    } else {
      alert("No data Available");
    }
  } catch (error) {
    console.error("Error exporting data to Excel:", error);
  }
};
