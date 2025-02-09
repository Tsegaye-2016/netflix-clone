import React from 'react'
import Raw from '../Row/Row'
import requests from '../../../utils/request';

const RowList = () => {
  return (
    <div>
      <Raw title = "Trending"
      fetchUrl={requests.fetchTrending}
      isLargeRow = {true}
      />
      <Raw title = "NETFLIX Originals"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow = {true}
      />
      <Raw title = "Top Rated Movies"
      fetchUrl={requests.fetchTopRatedMovies}
      isLargeRow = {true}
      />
      <Raw title = "TV Show"
      fetchUrl={requests.fetchTvShow}
      isLargeRow = {true}
      />
      {/* <Raw title = "Action Movies"
      fetchUrl={requests.fetchActionMovies}
      isLargeRow = {true}
      /> */}
      {/* <Raw title = "Action Movies"
      fetchUrl={requests.fetchActionMovies}
      isLargeRow:true
      />
      <Raw title = "Commedy Movies"
      fetchUrl={requests.fetchComedyMovies}
      isLargeRow:true
      />
      <Raw title = "Horror Movies"
      fetchUrl={requests.fetchHorrorMovies}
      isLargeRow:true
      />
      <Raw title = "Romance Movies"
      fetchUrl={requests.fetchRomanceMovies}
      isLargeRow:true
      />
      <Raw title = "Documentary Movies"
      fetchUrl={requests.fetchDocumentaries}
      isLargeRow:true
      /> */}
    </div>
  )
}

export default RowList;
