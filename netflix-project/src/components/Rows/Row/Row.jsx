import axios from '../../../utils/axios';
import React, { useEffect, useState } from 'react';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
import './Row.css';

const Row = ({title,fetchUrl,isLargeRow}) => {
    const [movies, setMovie]= useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");
    const baseURL = "https://image.tmdb.org/t/p/original";

    useEffect(()=>{
      (async()=>{
        try{
        // console.log('fetchUrl',fetchUrl);
        const request = await axios.get(fetchUrl);
        // console.log('request',request);
        setMovie(request.data.results);
        } catch(error){
          console.log("error",error);
        }
      })();
    },[fetchUrl]);
const handleClick = (movie)=>{
    if(trailerUrl){
      setTrailerUrl('');
    }else{
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
      .then((url)=>{
        console.log(url)
        const urlParams = new URLSearchParams(new URL(url).search)
        console.log(urlParams);
        console.log(urlParams.get('v'))
        setTrailerUrl(urlParams.get('v'));
      })
    }
}
    const opts = {
      height:'390',
      width:'100%',
      playerVars:{
        autoplay:1,
      },
    }
  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
          onClick={()=>handleClick(movie)}
          key={index} src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className={`row_poster ${isLargeRow && "row_posterLarg"}`}
          />
        ))

        }
      </div>
      <div style={{padding:'40px'}}>
          {trailerUrl && <YouTube videoId = {trailerUrl} opts = {opts}/>}
      </div>
    </div>
  )
}

export default Row;
