import './App.css';
import React, { Component, Fragment } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import Main from './Main';
import BucketListContainer from './containers/BucketListContainer';
import VisitedContainer from './containers/VisitedContainer';


class App extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    console.log('cdm works');
    this.props.getCountries();
  }

  render(){
    return (
      <div className="App">
        <h1>WORLD BUCKET LIST</h1>
        <Router>
          <Fragment>
            <NavBar/>
            <Route exact path ="/" component = {Main} />
            <Route path = "/bucketlist" component = {BucketListContainer}/>
            <Route path = "/visited" component = {VisitedContainer}/>
          </Fragment>
        </Router>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => ({
  getCountries() {
    dispatch(() => {
      fetch(`https://restcountries.eu/rest/v2/all`)
      .then(res => res.json())
      .then(countries => {
        dispatch({
          type: 'GET_COUNTRIES',
          countries
        })
      })
    })
  }
})


export default connect(null, mapDispatchToProps)(App);
