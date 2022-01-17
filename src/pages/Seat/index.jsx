import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../store/context";
import { OPEN_AUTH } from "../../store/action.types";
import { NUMBER_TO_ALP } from "../../utils/commonConst";
import { getSeats, bookTickets } from "../../services/apiCall";
import { BOOK_TICKET_MESSAGE } from "../../store/action.types";

import styles from "./seat.module.css";

export const Seat = () => {
  const { state, dispatch } = useContext(Context);

  const navigate = useNavigate();

  const { movieId, theatreId, showId } = useParams();

  const [seatDetails, setSeatDetails] = useState({
    seatList: [],
    blocked: []
  });

  const [showdetail, setShowdetail] = useState({
    price: '',
    theaterName: ''
  })

  useEffect(() => {
    getSeatList();
  }, []);

  const getSeatList = () => {
    getSeats(showId).then((data) => {
      console.log(data.seatList);
      setSeatDetails({ ...seatDetails, seatList: data.seatList[0].seats });
      getShowDetails();
    });
  };

  const handleBlocked = (seat, isblock) => {
    if (isblock){
      const blockedSeats = [...seatDetails.blocked];
      blockedSeats.push(seat)
      setSeatDetails({
        ...seatDetails,
        blocked: blockedSeats
      })
    }
    else {
      const blockedSeats = [...seatDetails.blocked];
      const newSeats = blockedSeats.filter(item => item != seat);
      setSeatDetails({
        ...seatDetails,
        blocked: newSeats
      })
    }
    
  }

  const BookTicket = () => {
    const bookingDetails = {
      movieId : movieId,
      theatreId: theatreId,
      seatId: showId,
      seats: seatDetails.blocked
    }
    bookTickets(bookingDetails).then(data => {
      if (data.statuscode == 401){
        dispatch({
          type: OPEN_AUTH,
          payload: {
            openAuth: true,
          },
        });
      }
      else {
        // navigate('/')
        dispatch({
          type: BOOK_TICKET_MESSAGE,
          payload: {
            message: `Ticket Booked successfully and your booking id is ${data.booked._id}`
          }
        })
      }
    }).catch(error => console.log(error));
  }

  const getShowDetails = () => {
    state.theatreList.map(item => {
      item.shows.map(showItem => {
        if (Object.keys(showItem)[0] == showId){
          setShowdetail({
            price: item.price,
            theaterName: item.theaterName
          })
        }
      })
    })
  }

  return (
    <div className={styles.seatContainer}>
      <div className={styles.movieDetails}>
        <div className={styles.backButton} onClick={() => navigate('/')}>{"<"}</div>
        <div className={styles.movieDetCont}>
          <div className={styles.movieName}>{state.activeMovie.name}</div>
          {console.log(state.theatreList)}
          <div className={styles.theaterName}>{showdetail.theaterName}</div>
        </div>
      </div>
      <div className={styles.timingDetails}></div>
      <div className={styles.seatDetails}>
        <div className={styles.price}>Price: Rs. {showdetail.price}</div>
        {seatDetails.seatList ? (
          <div className={styles.seatListContainer}>
            {seatDetails.seatList.map((value, index) => {
              return (
                <div className={styles.rowContainer}>
                  <div className={styles.verticalValue}>{value.row}</div>

                  <RowSeat horizontalArray={value.column} row={value} handleBlocked={handleBlocked} blockedSeats={seatDetails.blocked} />
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className={styles.footer}>
        <button className={styles.bookButton} onClick={BookTicket} >Book</button>
        {/* <div className={styles.otherDetails}></div>
        <div className={styles.seatBookingInfo}></div> */}
      </div>
    </div>
  );
};

export const RowSeat = ({ horizontalArray, handleBlocked, blockedSeats, row }) => {
  const [bookSeat, setBookSeat] = useState([]);
  
  const handleSelect = (e) => {
    let blocked = false;
    if (e[1]){
      const seat = `${row.row}_${e[0]}`
      if (blockedSeats.includes(seat)){
        blocked = false;
      }
      else {
        blocked = true;
      }
      // console.log(row)
      
      handleBlocked(seat, blocked);
      // console.log(e);
      console.log(blockedSeats)
    }
  }

  const getSeatStatus = (item) => {
    // console.log(item)
    const seat = `${row.row}_${item[0]}`
    if (item[1] && blockedSeats.includes(seat)) {
      return styles.blocked
    }
    else if (item[1]) {
      return styles.seat
    }
    else {
      return styles.booked
    }
  }

  return (
    <div className={styles.rowSeatContainer}>
      {Object.entries(horizontalArray).map((item) => (
        <div
          className={getSeatStatus(item)
          }
          onClick={() => handleSelect(item)}
        >
          {item[0]}
        </div>
      ))}
    </div>
  );
};
