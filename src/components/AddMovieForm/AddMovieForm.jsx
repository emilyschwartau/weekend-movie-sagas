import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Form to add a movie
function AddMovieForm() {



   

    return(
        <>
        <nav>
            <button onClick={(event) => {history.push('/')}}>Cancel</button>
        </nav>
        <p>Add a Movie</p>

        </>
    )
}

export default AddMovieForm;