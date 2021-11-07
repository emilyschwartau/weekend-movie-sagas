import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Form to add a movie
function AddMovieForm() {

    const history = useHistory();
    const dispatch = useDispatch();

    const genresList = useSelector((store) => store.genres);


    let [newMovie, setNewMovie] = useState({ title: '', poster: '', description: '', genre_id: ''});
    //let [genre_id, setGenre_id] = useState(0);

    const handleTitleChange = (event) => {
        //console.log('event happened');
        setNewMovie({...newMovie, title: event.target.value})
    }

    const handlePosterChange = (event) => {
        //console.log('event happened');
        setNewMovie({...newMovie, poster: event.target.value})
    }

    const handleDescriptionChange = (event) => {
        //console.log('event happened');
        setNewMovie({...newMovie, description: event.target.value})
    }

    const handleGenreChange = (event) => {
        //console.log('event happened');
        setNewMovie({...newMovie, genre_id: event.target.value})
    }


    const addNewMovie = event => {
        event.preventDefault();
        dispatch({ type: 'ADD_MOVIE', payload: newMovie });
        //updates the next 
        setNewMovie({ title: '', poster: '', description: '', genre_id: ''});
    }

    //console.log('genre_id', genre_id);
    return(
        <>
        <nav>
            <button onClick={(event) => {history.push('/')}}>Cancel</button>
        </nav>
        <p>Add a Movie</p>

        <div>
            <form onSubmit={addNewMovie}>
                <input placeholder='Title' type='text' value={newMovie.title} onChange={handleTitleChange} />
                <input placeholder='Poster url' type='text' value={newMovie.poster} onChange={handlePosterChange} />
                {/* <input type='text-area' value={newMovie.description} onChange={handlePosterChange} /> */}
                <textarea placeholder='Description' rows="4" cols="50" value={newMovie.description} onChange={handleDescriptionChange}></textarea>
                
                      {/* drop down with genre names */}
                <select value={newMovie.genre_id} 
                    onChange={handleGenreChange}>
          
                    <option disabled value='0'>
                        Pick One!
                    </option>

                    {genresList.map((genre) => {
                    return (
                    <option key={genre.id} value={genre.id}>
                    {genre.name}
                    </option>
                    );
                    })}
                </select>

                <input type='submit' value='Save' />
            </form>
        </div>

       



        </>
    )
}

export default AddMovieForm;