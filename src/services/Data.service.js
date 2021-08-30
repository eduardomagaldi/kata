const DataService = {
  fetchBooks: function() {
    return fetch('/books.csv')
      .then(response => response.text())
      .then(csvJSON)
      .catch(handleErr);
  },
  fetchMagazines: function () {
    return fetch('/magazines.csv')
      .then(response => response.text())
      .then(csvJSON)
      .catch(handleErr);
  }
};

function handleErr(err) {
  console.log('Fetch Error :-S', err);
}

function csvJSON(csv) {
  const lines = csv.split('\n')
  const result = []
  const headers = lines[0].split(';')

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i])
      continue
    const obj = {}
    const currentline = lines[i].split(';')

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j]
    }
    result.push(obj)
  }
  return result;
}

export default DataService;
