import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function MovieDetails() {

    //Dane's solve: 
    //use Effect that does type: Fetch_movie_genres, payload: selectedMovie (this is the movie id)
    //axios get request saga instead of '/api/movie' we just want one movie so '/api/movie/${action.payload}'
    //make a new reducer for selected genres
    //can add another case to  selectedMovie reducer to add genres
    //selectedMovie.genres?.map(genre =>) - how to display on DOM
    //question mark is make sure genres is a thing before you map over it
    
    //retrieves data from redux store
    const selectedMovie = useSelector((store) => store.selectedMovie);
    const allGenres = useSelector((store) => store.genres);
    const allMoviesGenres = useSelector((store) => store.movies_genres);

    const history = useHistory();

    //array to push selected genres for individual movies into
    let genreArray = [];

    //giant function that maps over all rows of the movies_genres table
    //and if the movie_id matches the selectedMovie.id 
    //another function is called that maps through all possible genres
    //and if the genre.id matches the genre_id 
    //the genre.name is pushed into the genreArray
    function junctionTableMapper () {
        {allMoviesGenres.map(linkItem => {    
               if(linkItem.movie_id === selectedMovie.id) 
                    genresTableMapper();
                    function genresTableMapper () {
                        {allGenres.map(genreItem => {
                            if(genreItem.id === linkItem.genre_id)
                                return (
                                    genreArray.push(`${genreItem.name}`)
                                )
                        })}//end of inner loop
                }//end function genresTableMapper
                
             
                   
        })}//end of outer loop
    }//end junctionTableMapper
    
    //invoking mapping function
    junctionTableMapper();

    //console.log('selected genre array', genreArray);

    return (
      <section>
        <nav>
            <button onClick={(event) => {history.push('/')}}>Back to List</button>
        </nav>
        <h1>Selected Movie</h1>
        {
            selectedMovie.title ? (
            <>
              
                <h2>{selectedMovie.title}</h2>
                <img src={selectedMovie.poster} alt={selectedMovie.title}/>
                <p>Description: {selectedMovie.description}</p>

                <div>
                Genres: 
                    <ul>
                        {genreArray.map((genre, index) => (
                            <li key={index}>
                                {genre}
                            </li>  
                        ))}
                    </ul>

                </div>
            </>
            ) : (
              <p>No movie selected.</p>
            )
        }
      </section>
    );
    
}


export default MovieDetails;