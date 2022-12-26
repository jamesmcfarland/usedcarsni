const jsonToCSV = (json) => {
    const replacer = (key, value) => (value === null ? "" : value);
    const header = Object.keys(json[0]);
    const csv = [
      header.join(","), // header row first
      ...json.map((row) =>
        header
          .map((fieldName) => JSON.stringify(row[fieldName], replacer))
          .join(",")
      ),
    ].join("\r\n");
    return csv;
  };


  module.exports = {jsonToCSV}
