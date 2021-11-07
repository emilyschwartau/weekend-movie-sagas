import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Form to add a movie
function AddMovieForm() {

    const history = useHistory();

    // const [newTitle, setNewTitle] = useState('');
    // const [newPoster, setNewPoster] = useState('');
    // const [newDescription, setNewDescription] = useState('');

    let [newMovie, setNewMovie] = useState({ id: 15, title: '', poster: '', description: ''});

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

    const addNewMovie = event => {
        event.preventDefault();
        dispatch({ type: 'ADD_MOVIE', payload: newMovie });
        //updates the next plant to have a new id
        setNewMovie({ id:newMovie.id + 1, title: '', poster: '', description: ''});
    }

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
                <input type='submit' value='Add New Movie' />
            </form>
        </div>

       



        </>
    )
}

export default AddMovieForm;