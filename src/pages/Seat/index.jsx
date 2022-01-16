import React, { useState } from "react";

import { NUMBER_TO_ALP } from "../../utils/commonConst";

import styles from "./seat.module.css";

export const Seat = () => {
  const [seatCount, setSeatCount] = useState({
    horizontalSeatCount: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    verticalSeatCount: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  });
  return (
    <div className={styles.seatContainer}>
      <div className={styles.movieDetails}>
        <div className={styles.backButton}>{"<"}</div>
        <div className={styles.movieDetCont}>
          <div className={styles.movieName}>Movie Name</div>
          <div className={styles.theaterName}>Theater Name</div>
        </div>
      </div>
      <div className={styles.timingDetails}></div>
      <div className={styles.seatDetails}>
        <div className={styles.price}>Price: Rs. 150</div>
        <div className={styles.seatListContainer}>
          {seatCount.verticalSeatCount.map((value, index) => {
            return (
              <div className={styles.rowContainer}>
                <div className={styles.verticalValue}>
                  {NUMBER_TO_ALP[value]}
                </div>
                <RowSeat horizontalArray={seatCount.horizontalSeatCount} />
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.footer}>
        <button className={styles.bookButton}>Book</button>
        {/* <div className={styles.otherDetails}></div>
        <div className={styles.seatBookingInfo}></div> */}
      </div>
    </div>
  );
};

export const RowSeat = ({ horizontalArray }) => {
  return (
    <div className={styles.rowSeatContainer}>
      {horizontalArray.map((value, index) => {
        return <div className={styles.seat}>{value}</div>;
      })}
    </div>
  );
};
