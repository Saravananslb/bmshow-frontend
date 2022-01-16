import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { DAY_DATE_MAPPING } from "../../utils/commonConst";

import styles from "./theater.module.css";

export const Theater = () => {
  const navigate = useNavigate();

  const onSelectTiming = () => {
    navigate("/seat");
  };

  return (
    <div className={styles.theaterContainer}>
      <div className={styles.extraNav}></div>
      <div className={styles.movieDetails}>Movie Name</div>

      <div className={styles.dateDetails}>
        <DateComponent />
      </div>
      <div className={styles.theaterDetails}>
        <TheaterDetails onSelectTiming={onSelectTiming} />
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

const TheaterDetails = ({ onSelectTiming }) => {
  return (
    <div className={styles.theaterDetailsContainer}>
      <div className={styles.theaterRow}>
        <div className={styles.theaterName}>Theater Name</div>
        <div className={styles.theaterTiming}>
          <div className={styles.timingContainer}>
            <div onClick={onSelectTiming} className={styles.time}>
              10:00 AM
            </div>
            <div className={styles.time}>10:00 AM</div>
            <div className={styles.time}>10:00 AM</div>
            <div className={styles.time}>10:00 AM</div>
            <div className={styles.time}>10:00 AM</div>
            <div className={styles.time}>10:00 AM</div>
            <div className={styles.time}>10:00 AM</div>
            <div className={styles.time}>10:00 AM</div>
            <div className={styles.time}>10:00 AM</div>
            <div className={styles.time}>10:00 AM</div>
            <div className={styles.time}>10:00 AM</div>
            <div className={styles.time}>10:00 AM</div>
            <div className={styles.time}>10:00 AM</div>
            <div className={styles.time}>10:00 AM</div>
            <div className={styles.time}>10:00 AM</div>
            <div className={styles.time}>10:00 AM</div>
            <div className={styles.time}>10:00 AM</div>
            <div className={styles.time}>10:00 AM</div>
            <div className={styles.time}>10:00 AM</div>
            <div className={styles.time}>10:00 AM</div>
          </div>
        </div>
      </div>
      <div className={styles.theaterRow}>
        <div className={styles.theaterName}>Theater Name</div>
        <div className={styles.theaterTiming}>
          <div className={styles.timingContainer}>
            <div className={styles.time}>10:00 AM</div>
            <div className={styles.time}>10:00 AM</div>
            <div className={styles.time}>10:00 AM</div>
            <div className={styles.time}>10:00 AM</div>
            <div className={styles.time}>10:00 AM</div>
            <div className={styles.time}>10:00 AM</div>
            <div className={styles.time}>10:00 AM</div>
          </div>
        </div>
      </div>
      <div className={styles.theaterRow}>
        <div className={styles.theaterName}>Theater Name</div>
        <div className={styles.theaterTiming}>
          <div className={styles.timingContainer}>
            <div className={styles.time}>10:00 AM</div>
            <div className={styles.time}>10:00 AM</div>
            <div className={styles.time}>10:00 AM</div>
            <div className={styles.time}>10:00 AM</div>
          </div>
        </div>
      </div>
    </div>
  );
};
