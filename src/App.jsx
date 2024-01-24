import { useState } from 'react';

import MovieWindow from './components/MovieWindow.jsx'
import MovieCard from './components/MovieCard.jsx'
import SearchIcon from './assets/9349901.png'
import './App.css'

function App() {
  const [cerca, setCerca] = useState('');
  const [movieId, setMovieId] = useState('tt0104652');
  const [movieList, setMovieList] = useState()
  
  async function getMovieList(e){
    try{
      e.preventDefault();
      
    await fetch('https://api.themoviedb.org/3/search/movie?query='+cerca+'&api_key=11421c8e3fa1480a475c2fb4282be228')
    .then((response) => response.json())
      .then((data) => {
         console.log(data);
         setMovieList(data)
       
      })
     
    
    } catch (error){
      console.log("unto")
    }
  }
  async function getMovieId(id){
    try{
    await fetch('https://api.themoviedb.org/3/movie/'+id+'/external_ids?api_key=11421c8e3fa1480a475c2fb4282be228')
    .then((response) => response.json())
      .then((data) => {
        setMovieList(null)
        setMovieId(data.imdb_id)
        
      })
     
    
    } catch (error){
      console.log("unto")
    }
  }
  
  return (
    <div >
      <div>
      <form className="searchForm" onSubmit={getMovieList}>
      <input
        type="text"
        class="textbox"
        placeholder="Search for a movie"
        value={cerca}

        onChange={(e) => {
          setCerca(e.target.value);
         
        }}
        
        autoFocus
        
      />
      <button type="submit"  class="submitButton"><img src={SearchIcon} alt="Icona ricerca" class="search-icon"/></button>
     </form>
      </div>
      <>
      {!movieList ?( <MovieWindow filmId={movieId}/> ):(
       <div className='scrollableContainer'>
       {movieList.results.map((result)=>{
        return <><div onClick={()=>{
          getMovieId(result.id)
          setCerca(result.original_title)
        }}><MovieCard movie={result} /></div></>
       })}
       </div>
      )}
        
      </>
     </div>
    
  )
}

export default App
