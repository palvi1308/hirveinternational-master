import React from "react";
import { Button } from './../Button'
import '../../App.css';
import './../ContactUs.css'

export default function ContactUs() {
    return ( <>
    <h1 className="contact-us"> GET IN TOUCH</h1>
    <section className='contact-sub'>
            <div className='input-areas'>
                <div className="input-area-wrapper">
                    <p className='contact-sub-heading'>
                        Name
                    </p>    
                    <form>
                        <input type='text' name='name' placeholder='Your Name' className='contact-input'/>
                    </form>
                    <p className='contact-sub-heading'>
                        Phone 
                    </p>    
                    <form>
                        <input type='text' name='phone' placeholder='Your Phone Number' className='contact-input'/>
                    </form>
                    <p className="contact-sub-heading"> Query</p>
                    <form>
                        <input type='text' name='message' placeholder='Your Message' className='contact-input'/>
                    </form>
                </div>
                <div className="input-area-wrapper">
                    <p className='contact-sub-heading'>
                        Email
                    </p>    
                    <form>
                        <input type='email' name='email' placeholder='Your Email' className='contact-input'/>
                    </form>
                    <p className='contact-sub-heading'>
                        Representative Company
                    </p>    
                    <form>
                        <input type='text' name='company' placeholder='Your Company' className='contact-input'/>
                    </form>
                </div>
            </div>
            <div className="input-area-btn">
                <Button buttonStyle='btn--primary'>Send Message</Button>
            </div>
        </section>
        <section>
            <div className="contact-us-wrapper">
                <div className="phone-sub">
                    <h2>Phone</h2>
                    <h4>+91 12345678</h4>
                </div>
                <div className="email-sub">
                    <h2>Email</h2>
                    <h4>info@companyname.com</h4>
                </div>
                <div className="address-sub">
                    <h2>Address</h2>
                    <h4>Company Name, Address Line 1, Address Line 2, City</h4>
                </div>
            </div>
            
        </section>
    </>
    )
}