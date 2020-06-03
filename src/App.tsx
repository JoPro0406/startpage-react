import React from "react";

import "./index.css";

import SearchBox from "./components/SearchBox";
import Favorites from "./components/Favorites";

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
