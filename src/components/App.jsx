import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Actors, MovieInformation, Movies, Profile, NavBar} from './';

import useStyles from './styles'

const App = () => {
    const classes = useStyles();
    return(
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <div className={classes.toolbar} />
      <main className={classes.content}>
       <Routes>
        <Route exact path='/movie/:id' element={<MovieInformation />}/>
        <Route exact path='/actors/:id' element={<Actors />}/>
        <Route exact path='/' element={<Movies />}/>
        <Route exact path='/profile/:id' element={<Profile />}/>
       </Routes>
      </main>
    </div>
    );
}

export default App;