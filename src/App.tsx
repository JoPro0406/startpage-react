import React from "react";

import "./index.css";

import SearchBox from "./SearchBox";
import Favorites from "./Favorites";

const App = () => {
  return (
    <div className="App">
      <div className="background-image"></div>
      <div className="app-container">
        <SearchBox />
        <Favorites />
      </div>
    </div>
  );
};
export default App;
