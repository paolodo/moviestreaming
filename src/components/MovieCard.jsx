import { useEffect, useState } from 'react';


const MovieCard= ({movie}) => {
    const posterUrl = 'https://image.tmdb.org/t/p/original'+ movie.poster_path
  return (
    <div className='logo' >
       
       <img src={posterUrl} className='img' />
        {movie.original_title}
    </div>
  );

}
export default MovieCard;