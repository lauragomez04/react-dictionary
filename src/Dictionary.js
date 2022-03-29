import React, { useState } from "react";

import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001ec44adb7b1fc46ce9285a36a04ab5ba4";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleWordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="dictionary">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <i className="bi bi-search"></i>
            <input
              type="search"
              placeholder="Search for a word"
              onChange={handleWordChange}
            />
          </div>
        </form>
        <div className="word-results">
          <Results results={results} />
        </div>
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
