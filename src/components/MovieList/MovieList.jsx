import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
import { Card } from '@material-ui/core';
import Grid from '@mui/material/Grid';

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();

    //retrieves movies from the store
    const movies = useSelector(store => store.movies);

    //firing off actions to get data from DB
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({type: 'FETCH_GENRES'})
        dispatch({type: 'FETCH_MOVIES_GENRES'})
    }, []);

    const handleSelectMovie = (movie) => {
        // store selected movie object in Redux
        dispatch({ type: 'SET_SELECTED_MOVIE', payload: movie }); 

        // go to details view
        history.push('/details');
        //console.log(movie);
    };

    return (
        <main>
            <div id="titleButton">
            <h1 id="movieList">MovieList</h1>
            <nav>
                <button onClick={(event) => {history.push('/addMovie')}}>Add a Movie!</button>
            </nav>
            </div>
            <section className="movies">
                {movies.map(movie => {
                    return (
                       
                                <div id="margin">
                                    <Card >
                                        <div id="card" key={movie.id} onClick={() => handleSelectMovie(movie)}>
                                            <h3>{movie.title}</h3>
                                            <img src={movie.poster} alt={movie.title}/>
                                        </div>
                                    </Card>
                                </div>
                    );
                    
                })} 
            </section>
        </main>

    );
}

export default MovieList;
