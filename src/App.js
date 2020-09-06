import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/post">
            <Post />
          </Route>
          <Route path="/posts/:postsId">
            <PostDetail></PostDetail>
          </Route>
          <Route exact path="/">
            <Post />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
