import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AdminSection from './Components/Home/AdminSection/AdminSection';
import ManageBlogs from './Components/Home/AdminSection/ManageBlogs';
import TopBar from './Components/Home/Header/TopBar';
import Home from './Components/Home/Home/Home';
import PageError from './Components/PageError/PageError';
import ShowDetails from './Components/ShowDetails/ShowDetails';

function App() {
  
  return (
    <div>
      <Router>
      <TopBar></TopBar>
      <Switch>
      <Route path="/admin">
        <AdminSection></AdminSection>
      </Route>
      <Route path="/delete">
       <ManageBlogs></ManageBlogs>
      </Route>
      <Route path="/blog/:blogId">
        <ShowDetails></ShowDetails>
      </Route>
      <Route exact path="/">
          <Home></Home>
      </Route>
      <Route path="*">
      <PageError></PageError>
      </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
