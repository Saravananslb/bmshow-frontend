export const SIGN_UP_SUCCESS = { message: "Success", error: "" };

export const SIGN_UP_FAILURE = { data: "", error: "Error Message" };

export const SIGN_IN_SUCCESS = {
  message: "Success",
  token: "*****",
  email: "sample@gmial.com",
  error: "",
};

export const SIGN_IN_FAILURE = { data: "", error: "Error Message" };

export const GET_ALL_MOVIES = {
  message: "Success",
  Name: "Movie Name",
  Id: "Movie Id",
  ImageUrl: "rrrrrr",
  error: "",
};

export const GET_SEATS = {
  seatCount: 124,
  bookedSeats: { 12: true, 13: false, 14: true },
};

export const GET_THEATER = {
  theaterId: "Theater Id",
  timing: [
    { time: "7:30", seatId: "SeatId" },
    { time: "7:30", seatId: "Seat Id" },
  ],
};

export const BOOK_MOVIE = { message: "Success", error: "" };
