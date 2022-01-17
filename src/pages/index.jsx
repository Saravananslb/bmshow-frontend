import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Base } from "../components/Base";
import { Home } from "./Home";
import { Movie } from "./Movie";
import { Theater } from "./Theater";
import { Seat } from "./Seat";
import { Auth } from "./Auth";
import { Context } from "../store/context";

export const Pages = () => {
  const { state } = useContext(Context);

  return (
    <Base enabled={true}>
      {/* <Home /> */}
      {/* <Movie /> */}
      {/* <Theater /> */}

      {state.openAuth && <Auth />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<Movie />} />

        <Route path="/movie/:movieId/theater-list" element={<Theater />} />

        <Route path="/movie/:movieId/theatre/:theatreId/show/:showId/seat" element={<Seat />} />
      </Routes>
    </Base>
  );
};
