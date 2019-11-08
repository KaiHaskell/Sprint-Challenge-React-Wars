import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import SwCard from "./components/Card";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log(response.data.results);
        setPeople(response.data.results);
      })
      .catch(error => {
        console.log("Take a trip on the hell bus ", error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">
        <a href="https://fontmeme.com/star-wars-font/">
          <img
            src="https://fontmeme.com/permalink/191108/e719ef4e71466e5a1d74d2f83ac4cc2b.png"
            alt="star-wars-font"
            border="0"
          />
        </a>
      </h1>
      <div className="character-containersw">
        {people.map((character, index) => {
          return (
            <SwCard
              key={index}
              name={character.name}
              birth_year={character.birth_year}
              films={character.films}
              url={character.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
