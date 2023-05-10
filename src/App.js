import React,{useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import { 
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid
} from '@mui/material';
// import ExpandMore from '@mui/icons-material/ExpandMore';


function App() {

  const [movies,setMovies] = useState(null)

  useEffect(()=> {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=e3a89ca39100bceea4b71882246c87ff&language=en-US&sort_by=popularity.desc&page=1')
    .then(res => {
      console.log(res.data.results)
      setMovies(res.data.results)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  if(!movies){
    return null
  }

  return (
    <div className="App">

      {movies.map((movie,i) => (
        <Accordion key={movie.id}>
          <AccordionSummary
            // expandIcon={<ExpandMore/>}
            arial-control='panel1a-content'
            id='panel1a-content'
          >
            <Grid container spacing={2}>
              <Grid item xs={8} justifyContent="flex-start">
                <Typography>{movie.title}</Typography>
              </Grid>
              <Grid item xs={4} justifyContent="flex-end">
                <Typography>{movie.vote_average}/10</Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            {movie.overview}
          </AccordionDetails>
        </Accordion>
        // <li key={movie.id} >{movie.title}</li>
      ))}
      
    </div>
  );
}

export default App;
