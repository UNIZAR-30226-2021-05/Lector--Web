import React, { useState } from "react";

import CardList from "./CardList";
import SearchBar from "./SearchBar";

import MovieSource from "./api/MovieSource";

function AppCard() {
  const [state, setState] = useState({
    results: []
  });

  const onSearch = async (text) => {
    const results = await MovieSource.get("/", {
      params: { s: text, i: "tt3896198", apiKey: "821d565d" },
    });

    setState(prevState => {
      return { ...prevState, results: results }
    })
  };

  return (
    <div className="App">
      <div className="container searchApp">
        <h2 className="title is-2 has-text-centered">
          Encuentre su libro favorito
        </h2>
        <SearchBar onSearch={onSearch} />
        <CardList results={state.results} />
      </div>
    </div>
  );
}

export default AppCard;