import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter  as Router,Routes,Route} from 'react-router-dom';
import Cards from './components/Cards';
import FullProductPage from './components/FullProductPage';
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/about-us' Component={AboutUs}/>
        <Route path='/products' Component={Products}/>
        <Route path='/contact-us' Component={ContactUs}/>
       {/*  <Route path="/" element={<Cards />} />
        <Route path="/products/pulses-and-grains" element={<FullProductPage />} /> */}

      </Routes>
    </Router>
    </>
  );
}

export default App;
