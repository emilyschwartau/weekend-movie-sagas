import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';

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
            <h1>MovieList</h1>
            <nav>
                <button onClick={(event) => {history.push('/addMovie')}}>Add a Movie!</button>
            </nav>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} onClick={() => handleSelectMovie(movie)}>
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                    
                })} 
            </section>
        </main>

    );
}

export default MovieList;
