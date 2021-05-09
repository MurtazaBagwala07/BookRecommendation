import React, { useState } from "react";
import "./styles.css";

const bookDB = {
  action: [
    { name: "Black Panther (2018)", rating: "9/10" },
    { name: "Deadpool (2016)", rating: "9.5/10" },
    { name: "Dunkirk (2017)", rating: "8.5/10" }
  ],

  scifi: [
    {
      name: "Inception (2010)",
      rating: "9.5/10"
    },
    {
      name: "Interstellar (2014)",
      rating: "9.5/10"
    },
    {
      name: "The Prestige (2006)",
      rating: "9/10"
    }
  ],
  horror: [
    {
      name: "Conjuring (2013)",
      rating: "8.5/10"
    },
    {
      name: "Sinister (2012)",
      rating: "7.5/10"
    },
    {
      name: "Dead Silence (2007)",
      rating: "8/10"
    }
  ]
};
export default function App() {
  const [selectedGenre, setGenre] = useState("horror");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Book Recommendation</h1>
      <h6>These are someone of the books I'd recommend reading</h6>
      <hr />
      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              padding: "1rem 2rem",
              margin: "0.5rem 1rem",
              border: "2px solid Red",
              borderRadius: "2rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((books) => (
            <li
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "40%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "large" }}>{books.name}</div>
              <div style={{ fontSize: "smaller" }}>{books.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
