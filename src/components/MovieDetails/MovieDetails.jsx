import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { createGenerateClassName } from '@material-ui/styles';

// shows the selected pet data from Redux
function MovieDetails() {
    // data from redux
    const selectedMovie = useSelector((store) => store.selectedMovie);
    const allGenres = useSelector((store) => store.genres);
    const allMoviesGenres = useSelector((store) => store.movies_genres);

    const history = useHistory();
  
    useEffect(() => {
      // we could get more info about this movie from the server here
      
    });
  
    //console.log('selectedMovie', selectedMovie);
    //console.log('allGenres', allGenres);
    //console.log('allMoviesGenres', allMoviesGenres);

    let genreArray = [];

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
                        })}
                }
                
             
                   
        })}
    }
    
    junctionTableMapper();

  console.log('selected genre array', genreArray);

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