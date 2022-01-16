import React, { useReducer, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Context } from "./store/context";
import { reducer } from "./store/reducer";

import { Pages } from "./pages";

import "./App.css";

const initialState = {
  openAuth: false,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Router>
        <Pages />
      </Router>
    </Context.Provider>
  );
}

export default App;
