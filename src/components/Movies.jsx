import React from 'react';
import Movie from './Movie';

const Movies = (props) => {
  const { movies = [] } = props;

  return ( 
    <div className='movies'>
      { movies.length ? movies.map((movie) => {
        return <Movie key={movie.imdbID} {...movie}  />
      }) : <p>Nothing found</p>
    }
    </div>
   );
}
 
export default Movies;