import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faXmark} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { Button } from './Button';
 


function Navbar() {
    
  const [click, setClick] = useState(false);  
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 900) {
        setButton(false);
    }else{
        setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    }, []);

  window.addEventListener('resize',showButton);
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              
            <img
            src={require('./images/h.png')}
              className='navbar-logo-img'
            /> HIRVE INTERNATIONAL 
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                {click ? <FontAwesomeIcon icon={faXmark} style={{ color: 'white' }}/> :<FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />}
            </div>
            <ul className={click ? 'nav-menu active':'nav-menu'}>
                <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                     Home
                </Link>
                </li>
                <li className='nav-item'>
                <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                     About Us
                </Link>
                </li>
                <li className='nav-item'>
                <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                     Products
                </Link>
                </li>
                <li className='nav-item'>
                <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                     Contact Us
                </Link>
                </li>
            </ul>
            {/* {button && <Button buttonStyle='btn--outline'>CONTACT US</Button>} */}
        </div>
    </nav>
    </>
  )

}

export default Navbar;