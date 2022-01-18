import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import { Base } from "../components/Base";
import { Home } from "./Home";
import { Movie } from "./Movie";
import { Theater } from "./Theater";
import { Seat } from "./Seat";
import { Auth } from "./Auth";
import { Context } from "../store/context";
import { BookingHistory } from "./BookingHistory";

export const Pages = () => {
  const { state } = useContext(Context);

  const navigate = useNavigate();

  const onHistory = () => {
    navigate("/booking/history");
  };

  return (
    <Base onHistory={onHistory} enabled={true}>
      {/* <Home /> */}
      {/* <Movie /> */}
      {/* <Theater /> */}

      {state.openAuth && <Auth />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<Movie />} />

        <Route path="/movie/:movieId/theater-list" element={<Theater />} />

        <Route path="/movie/:movieId/theatre/:theatreId/show/:showId/seat" element={<Seat />} />

        <Route path="/booking/history" element={<BookingHistory />} />
      </Routes>
    </Base>
  );
};
