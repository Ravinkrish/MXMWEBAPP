import React, {useEffect} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap" ;
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Login from './Login';
import PagesRouting from './PagesRouting';
import {gapi} from "gapi-script";

//write below the routing for all the pages in 
function App() {
  const clientId = "686843189174-ev5png2m2bmdivu4nruo4rhnk3bhioh2.apps.googleusercontent.com";

  useEffect(() => {
    function start() {
      gapi.auth2.init({
        clientId:clientId,
        scope:""
      })
    };
    gapi.load('client:auth2',start);
  },[])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/*' element={<PagesRouting />} />
      </Routes>
    </Router>
  );
}

export default App;
