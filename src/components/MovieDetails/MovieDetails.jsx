import { useSelector } from 'react-redux';
import { useEffect } from 'react';

// shows the selected pet data from Redux
function MovieDetails() {
    // data from redux
    const selectedMovie = useSelector((store) => store.selectedMovie);
  
    useEffect(() => {
      // we could get more info about this movie from the server here
    });
  
    return (
      <section>
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






// function MovieDetails () {
// return (
//     <p>Movie Details</p>

// )
// }

export default MovieDetails;