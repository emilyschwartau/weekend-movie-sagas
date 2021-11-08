import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

// Form to add a movie
function AddMovieForm() {

    const history = useHistory();
    const dispatch = useDispatch();

    //firing off actions to get data from DB
    useEffect(() => {
        dispatch({type: 'FETCH_GENRES'})
    }, []);

    //retrieving all genres from the store
    const genresList = useSelector((store) => store.genres);

    //setting input value with local state
    let [newMovie, setNewMovie] = useState({ title: '', poster: '', description: '', genre_id: ''});

    //series of functions to add properties to local state object
    const handleTitleChange = (event) => {
        setNewMovie({...newMovie, title: event.target.value})
    }

    const handlePosterChange = (event) => {
        setNewMovie({...newMovie, poster: event.target.value})
    }

    const handleDescriptionChange = (event) => {
        setNewMovie({...newMovie, description: event.target.value})
    }

    const handleGenreChange = (event) => {
        setNewMovie({...newMovie, genre_id: event.target.value})
    }

    //function to dispatch an action to add local state object to DB
    //sets of chain of events to add to DB, re-get all movies from DB,
    //and update movieReducer
    //function also navigates user back to home page
    const addNewMovie = event => {
        event.preventDefault();
        dispatch({ type: 'ADD_MOVIE', payload: newMovie });
        history.push('/');
    }

    
    return(
        <>
        <nav>
            <button onClick={(event) => {history.push('/')}}>Cancel</button>
        </nav>
        <p>Add a Movie</p>

        <div>
            <form onSubmit={addNewMovie} >
                <input placeholder='Title' type='text' value={newMovie.title} onChange={handleTitleChange} />
                <input placeholder='Poster url' type='text' value={newMovie.poster} onChange={handlePosterChange} />
                <textarea placeholder='Description' rows="4" cols="50" value={newMovie.description} onChange={handleDescriptionChange}></textarea>
                
                {/* drop down with genre names */}
                <div>
                <label for='dropdown'>Select a Genre: </label>
                <select id='dropdown' value={newMovie.genre_id} onChange={handleGenreChange}>

                    {genresList.map((genre) => {
                        return (
                            <option key={genre.id} value={genre.id}>
                            {genre.name}
                            </option>
                        );
                    })}

                </select>
                </div>
                <input type='submit' value='Save' />
            </form>
        </div>

       



        </>
    )
}

export default AddMovieForm;