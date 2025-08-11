import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Components/Header/Header';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';

function App() {

  return (

      <div className='App'>
        <Header />
        {/* <Footer /> */}
        <Routes>
        <Route path="/" element={<Home />} />
</Routes>
      </div>

  );
}

export default App
