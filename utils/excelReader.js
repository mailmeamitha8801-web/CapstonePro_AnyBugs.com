const ExcelJS = require('exceljs');

async function readExcelData(filePath, sheetName) {
    const workbook = new ExcelJS.Workbook();

    await workbook.xlsx.readFile(filePath);

    const worksheet = workbook.getWorksheet(sheetName);

    if (!worksheet) {
        throw new Error(`Worksheet "${sheetName}" not found`);
    }

    const headers = worksheet.getRow(1).values;
    const data = [];

    worksheet.eachRow((row, rowNumber) => {
        if (rowNumber === 1) return;

        const rowData = {};

        row.eachCell((cell, colNumber) => {
            const header = headers[colNumber];

            if (header !== undefined && header !== null) {
                rowData[header] = cell.value;
            }
        });

        data.push(rowData);
    });

    return data;
}

module.exports = { readExcelData };
