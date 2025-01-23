import * as XLSX from "xlsx";

export const handleFileUpload = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const binaryString = e.target.result;

        const workbook = XLSX.read(binaryString, { type: "binary" });

        const sheetName = workbook.SheetNames[0];

        const worksheet = workbook.Sheets[sheetName];

        const data = XLSX.utils.sheet_to_json(worksheet);

        const transformedData = data.map((row) => {
          const transformedRow = {};
          for (const key in row) {
            const transformedKey = key.replace(/\s+/g, "_").toLowerCase();
            transformedRow[transformedKey] = row[key];
          }
          return transformedRow;
        });

        resolve(transformedData);
      } catch (error) {
        reject("Error reading the file: " + error.message);
      }
    };

    reader.onerror = (error) => {
      reject("File reading error: " + error.message);
    };
    reader.readAsBinaryString(file);
  });
};
