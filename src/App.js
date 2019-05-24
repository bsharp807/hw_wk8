import './App.css';
import React, { Fragment } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Main from './Main';
import BucketListContainer from './containers/BucketListContainer';


function App() {
  return (
    <div className="App">
      <h1>WORLD BUCKET LIST</h1>
      <Router>
        <Fragment>
          <NavBar/>
          <Route exact path ="/" component = {Main} />
          <Route path = "/bucketlist" component = {BucketListContainer}/>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
