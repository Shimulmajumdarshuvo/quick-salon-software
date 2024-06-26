import React from 'react';
import './Footer.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { AiFillYoutube } from "react-icons/ai";
import { SiInstagram } from "react-icons/si";


const Footer = () => {
    return (
        <div>
            <div className="footer-top">
                <div className="subFooter">
                    <h2>Site Map</h2>
                    <p>Home</p>
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Contact</p>
                    <p>Support</p>
                    <p>FAQ</p>


                </div>
                <div className="subFooter">
                    <h2>Our Company</h2>
                    <p>About Us</p>
                    <p>Board Of Directors</p>
                    <p>Leadership</p>
                    <p>Partner Program</p>
                    <p>Affiliate Program</p>
                    <p>Why Quick Salon</p>
                    <p>Terms & Conditions</p>
                    <p>Refund policy</p>
                    <p>Payment Process flow</p>

                </div>
                <div className="subFooter">
                    <h2>Business Type
                    </h2>
                    <p>Beauty Salon</p>
                    <p>Barber Salon</p>
                    <p>Hair Salons</p>
                    <p>Massage Therapy</p>
                    <p>Nail Salon</p>
                    <p>Bridal Salon</p>
                    <p>Spa Salon</p>
                    <p>Aesthetic Skin Clinic</p>
                    <p>Tattoo Art</p>

                </div>
                <div className="subFooter">
                    <h2>Contact Info.</h2>
                    <h5>SEND EMAIL </h5>
                    <p>support@quicksalon.io</p>
                    <div className="inputField">
                        <span></span>
                        <input type="email" name="email" value="Email Address" id="" />
                    </div>

                </div>

            </div>
            <div className="footer-down">
                <div className="footerSub">
                    <div className="singleFooter">
                        <h4>Copyright © 2022 . Quick Salon is owned, Developed & Maintained by Shah Technology.</h4>
                    </div>
                    <div className="singleFooter">
                        <div className='footerIcon'>
                            <span><SiInstagram></SiInstagram></span>
                            <span><FaFacebookF></FaFacebookF></span>
                            <span><ImLinkedin2></ImLinkedin2></span>
                            <span><FaTwitter></FaTwitter></span>
                            <span><AiFillYoutube></AiFillYoutube></span>
                        </div>
                        <h3 >+8801700000000</h3>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Footer;