import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faShip,faXmark} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                JOIN US IN OUR JOURNEY
            </p>
            <div className='input-areas'>
                <form>
                    <input type='email' name='email' placeholder='Your Email' className='footer-input'/>
                    <Button buttonStyle='btn--outline'>Connect</Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/contact-us'> How it works?</Link> 
                    <Link to='/about-us'> Our Values </Link> 
                    <Link to='/'> Our Goals</Link> 
                    <Link to='/'> Terms of Service</Link> 
                </div>
                <div className='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link to='/'> Instagram</Link> 
                    <Link to='/'> Facebook</Link> 
                    <Link to='/'> Youtube</Link> 
                    <Link to='/'> Twitter</Link> 
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Products</h2>
                    <Link to='/'> How it works?</Link> 
                    <Link to='/'> Careers</Link> 
                    <Link to='/'> Investors</Link> 
                    <Link to='/'> Terms of Service</Link> 
                </div>
                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/'>Address</Link>
                    <Link to='/'>Lorem Ipsum</Link>
                    <Link to='/'>Dolor</Link>
                </div>
            </div>
        </div>
        {/* <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'></Link>
                    <FontAwesomeIcon icon={faShip} style={{color:'#46a2da'}}/> HIRVE
                </div>
            </div>
        </section> */}
    </div>
  )
}

export default Footer