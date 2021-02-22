import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header'
import styled from 'styled-components';
import SideBar from './components/SideBar'
import Chat from './components/Chat'
function App() {
  return (
    <div className="App">
    <Router>
     
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Header/>
        <AppBody>
          <SideBar/>
          <Switch>
              <Route path="/">
                <Chat/>
              </Route>
          </Switch>
        </AppBody>
      
    </Router>
    </div>
  );
}
export default App;

const AppBody=styled.div`
  display:flex;
`;