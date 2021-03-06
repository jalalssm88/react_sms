import React from 'react';
import {Component} from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store'

import CampusList from './components/lists/campusList'
import CourseList from './components/lists/courseList'
import CreateSession from './components/lists/sessionList'

import CreateCampus from './components/create/createCampus'
import CreateCourse from './components/create/createCourse'

import CreateProgram from './components/create/createProgram'
import ProgramList from './components/lists/programList'

import SectionList from './components/lists/sectionList'
import SessionList from './components/lists/sessionList'

import ProfileDashboard from './components/lists/profileDashboard'

class App extends Component {
  render(){
    return (
      <Provider store={store}>
      <Router>
        <React.Fragment>
        <div className="ui container fluid">
          <div className="ui top fixed menu">
            <Link to="/" className="item" style={{'fontSize':'20px', 'fontWeight':'bold'}}>
              School System
            </Link>
          </div>
          <div className="ui left vertical inverted labeled icon menu fixed" id="left_menu">
            <Link to="/campuses/list" className="item">
              <i className="home icon"></i>
              Campuses
            </Link>
            <Link to="/sessions/list" className="item">
              <i className="clock outline icon"></i>
              Sessions
            </Link>
            <Link to="/courses/list" className="item">
              <i className="book icon"></i>
              Courses
            </Link>
            <Link to="/profile/dashboard" className="item">
              <i className="users icon"></i>
              Profiles
            </Link>
          </div>
        </div>
        <div className="main_container">
          <div className="ui grid stackable">
            <Switch>
              <Route path="/campuses/list" component={CampusList} />
              <Route path="/courses/list" component={CourseList} />
              <Route path="/sessions/list" component={CreateSession} />
              <Route path="/campus/create" component={CreateCampus} />
              <Route path="/course/create" component={CreateCourse} />
              <Route path="/program/:id" component={CreateProgram}/>
              <Route exact path='/programs/campus/:id' component={ProgramList} />
              <Route path='/sections/program/:id' component={SectionList} />
              <Route path='/sessions/list' component={SessionList} />
              <Route path='/profile/dashboard' component={ProfileDashboard} />
            </Switch>
          </div>
        </div>
        </React.Fragment>
      </Router>
      </Provider>
    );
  }
  
}

export default App;
