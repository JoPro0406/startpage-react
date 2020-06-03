import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import searchIcon from "../icons/search.png";

const SearchBox = () => {
  const [inputVal, setInputVal] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputVal.trim() !== "") {
      let search = inputVal.replace(/\s/g, "+").replace(/!/g, "%21");
      window.location.href = `https://duckduckgo.com/?q=${search}`;
    }
  };

  const handleClick = () => {
    if (inputVal.trim() !== "") {
      let search = inputVal.replace(/\s/g, "+").replace(/!/g, "%21");
      window.location.href = `https://duckduckgo.com/&q=${search}`;
    }
  };

  return (
    <div className="search-box-container">
      <div className="search-box">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          value={inputVal}
          onChange={handleChange}
          onKeyUp={handleEnter}
          autoFocus
          autoComplete="off"
        />
        <img src={searchIcon} alt="" onClick={handleClick} />
      </div>
    </div>
  );
};

export default SearchBox;
