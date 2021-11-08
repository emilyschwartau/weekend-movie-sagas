import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchGenres);
    yield takeEvery('FETCH_MOVIES_GENRES', fetchMovies_Genres);
    yield takeEvery('ADD_MOVIE', postMovie);
    
}

//gets all movies from the DB and stores them in reducer
function* fetchAllMovies() {
    
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

//gets all genres from the DB and stores them in reducer
function* fetchGenres() {
    
    try {
        const genres = yield axios.get('/api/genre');
        console.log('get genres:', genres.data);
        yield put({ type: 'SET_GENRES', payload: genres.data });

    } catch {
        console.log('get genres error');
    }
        
}

//saga axios post request to post movie to DB
function* postMovie (action) {
  
    try {
        yield axios.post('/api/movie', action.payload);
        yield put({type: 'FETCH_MOVIES'});
    } catch (err) {
       console.log(err);
       yield put({type: 'POST_ERROR'})
    }
}

// gets data from movies_genres table from DB and stores data in reducer
function* fetchMovies_Genres() {
    
    try {
        const movies_genres = yield axios.get('/api/movies_genres');
        console.log('get movies_genres:', movies_genres.data);
        yield put({ type: 'SET_MOVIES_GENRES', payload: movies_genres.data });

    } catch {
        console.log('get movies_genres error');
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie_genres data
const movies_genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// holds our selected movie for the details view
const selectedMovie = (state = {}, action) => {
    switch (action.type) {
      case 'SET_SELECTED_MOVIE':
        return action.payload;
      default:
        return state;
    }
  }

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        selectedMovie,
        movies_genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
