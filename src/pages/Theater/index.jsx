import React, { useContext, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { DAY_DATE_MAPPING } from "../../utils/commonConst";
import { getTheatreList } from "../../services/apiCall";
import styles from "./theater.module.css";
import { Context } from "../../store/context";
import { ADD_THEATRE_LIST } from "../../store/action.types";

export const Theater = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const {state, dispatch} = useContext(Context);

  const onSelectTiming = (showId, theatreId) => {
    navigate(`/movie/${movieId}/theatre/${theatreId}/show/${showId}/seat`);
  };

  useEffect(() => {
    getTheatres();
  }, []);

  const getTheatres = () => {
    getTheatreList(movieId).then(data => {
      console.log(data);
      dispatch({
        type: ADD_THEATRE_LIST,
        payload: {
          theatreList: data.showList
        }
      })
    })
  }

  return (
    <div className={styles.theaterContainer}>
      <div className={styles.extraNav}></div>
      <div className={styles.movieDetails}>{state.name}</div>

      <div className={styles.dateDetails}>
        <DateComponent />
      </div>
      <div className={styles.theaterDetails}>
        <TheaterDetails onSelectTiming={onSelectTiming} theatres={state.theatreList} />
      </div>
    </div>
  );
};

const DateComponent = () => {
  const date = useMemo(() => new Date(), []);

  const getDay = (increamenter = 0) => {
    return (date.getDay() + increamenter) % 7;
  };

  console.log(getDay());

  return (
    <div className={styles.dateComponentContainer}>
      <div>
        <div>{date.getDate()}</div>
        <div>{DAY_DATE_MAPPING[`${getDay()}`]}</div>
      </div>
      {/* <div>
        <div>{date.getDate() + 1}</div>
        <div>{DAY_DATE_MAPPING[`${getDay(1)}`]}</div>
      </div>
      <div>
        <div>{date.getDate() + 2}</div>
        <div>{DAY_DATE_MAPPING[`${getDay(2)}`]}</div>
      </div>
      <div>
        <div>{date.getDate() + 3}</div>
        <div>{DAY_DATE_MAPPING[`${getDay(3)}`]}</div>
      </div>
      <div>
        <div>{date.getDate() + 4}</div>
        <div>{DAY_DATE_MAPPING[`${getDay(4)}`]}</div>
      </div> */}
    </div>
  );
};

const TheaterDetails = ({ onSelectTiming, theatres }) => {
  return (
    <div className={styles.theaterDetailsContainer}>
      {theatres.map(item => {
        return (<div className={styles.theaterRow}>
        <div className={styles.theaterName}>{item.theatreName}</div>
        <div className={styles.theaterTiming}>
          <div className={styles.timingContainer}>
            {item.shows.map(showItem => {
              return (<div onClick={() => onSelectTiming(Object.keys(showItem)[0], item.theatreId)} className={styles.time}>
                {Object.values(showItem)[0]}
            </div>)
            })}
            
            
          </div>
        </div>
      </div>)
      })}
      
    </div>
  );
};
