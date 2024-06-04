import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { Container } from 'react-bootstrap';
import { MainPage } from './pages/mainPage/MainPage';
import { RegisterPage } from './pages/registerPage/RegisterPage';


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Container>
          <Navbar/>
          <Routes>
            <Route index element={<MainPage/>}/>
            <Route path='register' element={<RegisterPage/>}/>
          </Routes>
          <Footer/>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
