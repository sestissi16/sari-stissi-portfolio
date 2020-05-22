import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Main from './Components/Main';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import theGuardian from './Components/theGuardian'
import theGuardianPlay from './Components/theGuardianPlay'
import spaceSafe from './Components/spaceSafe'
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Main} />
          <Route exact path="/TheGuardian" component={theGuardian} />
          <Route exact path="/PlayTheGuardian" component={theGuardianPlay} />
          <Route exact path="/SpaceSafe" component={spaceSafe} />
        </Router>
      </div>
    );
  }
}

export default App;
