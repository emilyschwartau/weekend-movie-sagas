import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

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
  
    console.log('selectedMovie', selectedMovie);
    console.log('allGenres', allGenres);
    console.log('allMoviesGenres', allMoviesGenres);

    // if (`${selectedMovie.id}` === `${allMoviesGenres.movie_id}`) {
    //     //display movies_genres.genre_id
    //         //if movies_genres.genre_id === genre.id {
    //             //display genre
    //             console.log('allMoviesGenres.movieID', `${allMoviesGenres.movie_id}`)
    //         }

    // {allMovieGenres.map(item => {
    //     if(item.movie_id === selectedMovie.id)
    //     return (
    //     console.log ('id is', {item.movie_id})
    //     );
        
    //    })}
    
    return (
      <section>
          <div>
          {allMoviesGenres.map(item => {
        if(item.movie_id === selectedMovie.id)
            
        // return (
        // console.log ('id is', `${item.movie_id}`)
        // );
        
       })}
          </div>
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
              </>
            ) : (
              <p>No movie selected.</p>
            )
        }
      </section>
    );
    
  }


export default MovieDetails;