import React, { Component } from "react";
import Moviecontainer from "./component/Moviecontainer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Singlemovie from "./component/Singlemovie";
import LoadingBar from 'react-top-loading-bar'
export class App extends Component {
 apikey=process.env.REACT_APP_API_KEY
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
             <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}/>
          <Switch>
            <Route key="nothing" exact path="/">
              <Moviecontainer setProgress={this.setProgress} apikey={this.apikey} sort="vote_count.desc" />
            </Route>
            <Route key="home" exact path="/discover">
              <Moviecontainer setProgress={this.setProgress} apikey={this.apikey} sort="vote_count.desc" />
            </Route>
            <Route key="popular" exact path="/discover/popular">
              <Moviecontainer setProgress={this.setProgress} apikey={this.apikey} sort="popularity.desc" />
            </Route>
            <Route key="latest" path="/discover/latest">
              <Moviecontainer setProgress={this.setProgress} apikey={this.apikey} sort="release_date.desc" />
            </Route>
            <Route key="login" path="/login">
              <Login />
              {/* we justt take it like login page and make another sigin page for new user */}
            </Route>
            <Route key="latest" path="/signup">
              <Signup />
            </Route>

            <Route key="latest" path="/discover/singlemovie">
              <Singlemovie/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
