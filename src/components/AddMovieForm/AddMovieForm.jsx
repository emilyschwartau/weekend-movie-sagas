import { useHistory } from 'react-router-dom';

function AddMovieForm() {

    const history = useHistory();

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