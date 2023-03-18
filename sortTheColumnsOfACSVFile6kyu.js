/* 
You get a string with the content of a csv-file. The columns are separated by semicolons.
The first line contains the names of the columns.
Write a method that sorts the columns by the names of the columns alphabetically and incasesensitive.
*/

function sortCsvColumns(csvFileContent) {
  const [cols, ...rows] = csvFileContent.split(`\n`);
  const columns = cols.split(`;`);
  const parsedRows = rows.map((row) => row.split(`;`));
  const personColumns = columns
    .reduce((cols, name, i) => {
      return [
        ...cols,
        {
          name: name,
          rows: parsedRows.map((row) => row[i]),
        },
      ];
    }, [])
    .sort((a, b) => a.name.localeCompare(b.name));

  return personColumns
    .reduce((result, x, i) => {
      return [
        [...(result[0] ? result[0] : []), x.name],
        ...Array.from({ length: rows.length }).map((_, j) => [
          ...(result[j + 1] ? result[j + 1] : []),
          x.rows[j],
        ]),
      ];
    }, [])
    .map((row) => row.join(`;`))
    .join(`\n`);
}
