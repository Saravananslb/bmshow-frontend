import Cookies from 'universal-cookie';

const BASE_URL = `http://localhost:5000`

export const cookies = new Cookies();

export const getMovieList = () => {
    return fetch(`${BASE_URL}/api/v1/movie/movies`, {
        method: 'GET'
    }).then(data => data.json());
};

export const getTheatreList = (movieId) => {
    return fetch(`${BASE_URL}/api/v1/movie/shows/${movieId}`, {
        method: 'GET'
    }).then(data => data.json());
};

export const userSignIn = (bodyPayload) => {
    return fetch(`${BASE_URL}/api/v1/auth/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyPayload)
    }).then(data => data.json());
};

export const userSignUp = (bodyPayload) => {
    return fetch(`${BASE_URL}/api/v1/auth/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyPayload)
    }).then(data => data.json());
};

export const getSeats = (showId) => {
    return fetch(`${BASE_URL}/api/v1/movie/seats/${showId}`, {
        method: 'GET'
    }).then(data => data.json());
};

export const bookTickets = (bodyPayload) => {
    return fetch(`${BASE_URL}/api/v1/movie/book`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authToken': cookies.get('authToken')
        },
        body: JSON.stringify(bodyPayload)
    }).then(data => data.json());
};

export const getBookingTickets = () => {
    return fetch(`${BASE_URL}/api/v1/movie/bookings`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authToken': cookies.get('authToken')
        }
    }).then(data => data.json());
};