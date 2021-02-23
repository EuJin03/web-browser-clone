import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import "../css/Search.css";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Search = ({ hideButtons, prevValue }) => {
  const [_, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory();

  const search = e => {
    e.preventDefault();

    if (input && input !== "") {
      dispatch({ type: actionTypes.SET_SEARCH_TERM, term: input });

      history.push("/search");
    }
  };

  useEffect(() => {
    if (prevValue) {
      setInput(prevValue);
    }
  }, [prevValue]);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://cse.google.com/cse.js?cx=0c1d3020f2c89205f";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <form className="search">
      <div className="search__input gcse-search" enableAutoComplete="true">
        <SearchIcon className="search__inputIcon" />
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Search Google or type a URL"
        />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" variant="outlined" onClick={search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            variant="outlined"
            onClick={search}
          >
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
