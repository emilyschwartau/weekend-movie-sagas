import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';
import { useHistory } from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);
    // const genres = useSelector(store => store.genres);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({type: 'FETCH_GENRES'})
        dispatch({type: 'FETCH_MOVIES_GENRES'})
    }, []);

    const handleSelectMovie = (movie) => {
        // store selected movie object in Redux
        dispatch({ type: 'SET_SELECTED_MOVIE', payload: movie });
        //I think I should dispatch set_genre here as well, or fetch_genre?? //
        //dispatch({type: 'FETCH_GENRES'}); 
        //dispatch({type: 'FETCH_MOVIES_GENRES'}); 

        // go to details view
        history.push('/details');
        console.log(movie);
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
