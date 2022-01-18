import React, { useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { ImageCard } from "../../components/ImageCard";
import { getBookingTickets } from '../../services/apiCall';
import { Context } from "../../store/context";
import { OPEN_AUTH } from "../../store/action.types";

import styles from "./bookingHistory.module.css";
import {cookies} from '../../services/apiCall';

export const BookingHistory = () => {

    const [bookings, setBookings] = useState([]);

    const {state, dispatch} = useContext(Context);

    useEffect(() => {
        getBookingTickets().then(data => {
            if (data.statuscode == 401){
                cookies.remove('authToken');
                dispatch({
                  type: OPEN_AUTH,
                  payload: {
                    openAuth: true,
                  },
                });
              }else{
                setBookings(data.booking);
              }
        })
    },[])

  return (
    <div className={styles.bookingHistoryContainer}>
        {bookings.map(book => (
      <div className={styles.bookingHistoryRow}>
        <div>
          <ImageCard imageUrl={book.imageUrl} name={book.movieName}/>
        </div>
        <div className={styles.bookingHistoryDetails}>
          <div className={styles.movieName}>{book.movieName}</div>
          <div className={styles.theaterName}>{book.theaterName}</div>
          <div className={styles.timing}>{book.showTime}</div>
          <div>
            <span className={styles.bold}>Ticket No: </span> {book._id}
          </div>
          <div>
            <span className={styles.bold}>Seat No: </span> {(book.seats.join(', ')).replace('_', ' ')}
          </div>
        </div>
      </div>
        ))}
    </div>
  );
};