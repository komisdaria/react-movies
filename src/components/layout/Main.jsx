import React, { useEffect, useState } from 'react';
import Movies from '../Movies';
import PreloaderLoad from '../PreloaderLoad';
import Search from '../Search';

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);

const Main = () => {
   
  const [ movies, setMovies ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const getApi = async () => {
   const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`);

   const newData = await response.json();
  //  console.log(newData.Search); // достучаться до массива
   setMovies(newData.Search);
   setLoading(false);
  }

  const searchMovies = async (str, type = 'all') => {
    setLoading(true);
    const response = await fetch(`http://www.omdbapi.com/?apikey=a77d32e7&s=${str}${type !== 'all' ? `&type=${type}` : ''}`);
    const newData = await response.json();
   //  console.log(newData.Search); // достучаться до массива
    setMovies(newData.Search);
    setLoading(false);
  }
  
  useEffect(() => {
    getApi();
  }, [])

  return ( 
    <>
      <main className='container content'>
        <Search searchMovies={searchMovies} />
        {
          loading ? (
            <PreloaderLoad />
          ) : (
                <Movies movies={movies} />
              )
        }
       
      </main>
    </>
   );
}
 
export default Main;
