import { useEffect, useState } from 'react';
//import axios from 'axios';
//import styles from './SearchBar.module.css';

const MovieWindow = (filmId) => {
  console.log(filmId)
    const movieUrl= "https://vidsrc.xyz/embed/movie/"+filmId.filmId
    console.log(movieUrl)
  return (
    <div >
           <iframe 
  width="560" 
  height="315" 
  src={movieUrl}
  
  frameborder="0" 
  allow="accelerometer; 
  autoplay; 
  clipboard-write; 
  encrypted-media; 
  gyroscope; 
  picture-in-picture; 
  web-share; subtitle; fullscreen;" ></iframe>
     
    </div>
  );

}
export default MovieWindow;