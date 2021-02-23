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
import {useAuthState} from 'react-firebase-hooks/auth'
import Login from './components/Login'
import {auth} from './firebase'
import Spinner from 'react-spinkit'
function App() {
  const [user,loading]=useAuthState(auth);
  if(loading)
  {
    return(<Loader>
    <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none"/>)
      </Loader>)
  }
  return (
    <div className="App">
    <Router>
     {!user?(<Login/>):(
       <>
       <Header/>
        <AppBody>
          <SideBar/>
          <Switch>
              <Route path="/">
                <Chat/>
              </Route>
          </Switch>
        </AppBody>
       </>
     )}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        
      
    </Router>
    </div>
  );
}
export default App;

const AppBody=styled.div`
  display:flex;
  height:100vh;
`;
const Loader=styled.div`
 display:"flex";
 align-items:"center";
 margin-left:50%;
 margin-top:20%;
 margin-bottom:50%;
 /* margin-right:500px; */
 justify-content:"center";
`;
