import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './commons/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Main } from './components/Main';
import { routes } from './commons/routes';


function App() {
  return (
    <>
     <header>
       <Navbar/>
     </header>
     <Routes>
      <Route path='/' element= {<Main></Main>}>
        {
          routes.map ( ({ path, component:Component}) => (
            <Route
              key = { path }
              path = { path }
              element = { <Component />}
              />
          ))
        }
        {/* <Route path='../InformacionPage' element={<InformacionPage/>}/> */}
      </Route>
     </Routes>
    </>
  );
}

export default App;
