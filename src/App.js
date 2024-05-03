import './App.css';
import React,{useState,useEffect} from 'react'
import Container from './components/Container';
import { Header, Navbar } from './components/Index';
import {data} from './components/data'
import { Route, Routes } from 'react-router';
import { render } from '@testing-library/react';
function App() {

  
  return (
 <>
 

  <Navbar/>
 <Header/>  
   <Routes>
    <Route path='/' element={<Container/>}/>
   </Routes>
 </>   
  )
}

export default App