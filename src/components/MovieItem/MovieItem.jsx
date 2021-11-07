// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';

// // Display a single movie 
// function MovieItem({ movie }) {  
//   const dispatch = useDispatch();
//   const history = useHistory();

//   const handleSelectMovie = (movie) => {
//     // store selected movie object in Redux
//     dispatch({ type: 'SET_SELECTED_MOVIE', payload: movie });
//     // go to details view
//     history.push('/details');
//   };

//   return (
//     <li key={movie.id} onClick={() => handleSelectMovie(movie)}>
//         {/* //how to add genre?? */}
//         <div key={movie.id} >
//                              <h3>{movie.title}</h3>
//                              <img src={movie.poster} alt={movie.title}/>
//                         </div>
//       Movie:{movie.title} Poster: {movie.poster} Description: {movie.description}
//     </li>
//   );
// }

// export default MovieItem;

//  // return (
//                     //     <div key={movie.id} >
//                     //         <h3>{movie.title}</h3>
//                     //         <img src={movie.poster} alt={movie.title}/>
//                     //     </div>
//                     //);
