import React from 'react';
import DataService from './services/Data.service';
import './App.css';

export default function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [allItems, setAllItems] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      DataService.fetchBooks(),
      DataService.fetchMagazines()
    ]).then(function (valArray) {
      const data = valArray[0].concat(valArray[1]);

      data.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }

        if (a.title > b.title) {
          return 1;
        }

        return 0;
      });

      setAllItems(data.slice());

      setIsLoaded(true);
      setItems(data);
    });
  }, []);

  function handleKeyUp(e) {
    const value = e.target.value;

    if (value) {
      const filtered = items.filter((item) => {
        return item.title.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1 ||
          item.isbn.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1 ||
          item.authors.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1
      });

      setItems(filtered);
    } else {
      setItems(allItems);
    }
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <input
          type="text"
          onKeyUp={handleKeyUp}
          placeholder="Search Author or Title or ISBN"
          className="input-search"
          />

        <ul>
          {items.map(item => (
            <li key={item.isbn}>
              <strong>Title:</strong> {item.title}<br />
              <strong>Authors:</strong> {item.authors}<br />
              <strong>Description:</strong> {item["description\r"]}<br />
              <strong>ISBN:</strong> {item.isbn}<br />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}