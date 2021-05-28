import React from 'react';
import AppBar from './components/AppBar';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Rate from './components/Rate';

function App (){
  return (
    <Router>
    <div>
    <Route  path="/rate/:id">
      <Rate></Rate>
      </Route> 
      <Route  path="/">
      <AppBar />
      </Route> 
           
      </div>
      </Router>
  );
}
export default App;