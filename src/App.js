import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Fav from './Components/Fav';
import {BrowserRouter as Router,Switch,Route, BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    
        <Router>
      <Navbar/>
      { <Switch>
        <Route path='/' exact render={(props)=>(
          <>
            <Banner {...props}/>
            <Movies {...props}/>
          </>
        )}/>
        <Route path='/fav' component={Fav} />
       </Switch> }
    </Router>
  );
}

export default App;
