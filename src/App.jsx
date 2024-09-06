import React from 'react';
import Navbar from './components/header/Navbar';
import Banner from './components/header/Banner';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Signup from './pages/signup';
import Login from './pages/Login';
import HeroSection from './pages/HeroSection';
import About from './pages/About';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';
import Account from './pages/Account';





const App = () => {
  return (
    <>
     <Router>
      <Banner />
      <Navbar />
      

    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/herosection" element={<HeroSection />} />
        <Route path="*" element={<Error404></Error404>} /> 
        <Route path="/myAccount" element={<Account></Account>} /> 





        
      </Routes>

      <Footer />
      
      </Router>
      

      

       
    </>
  )
}

export default App