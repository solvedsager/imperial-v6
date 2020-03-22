import React, { Fragment, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function Footer() {
  return (
        <Fragment>
            <footer className="footer_area">
                <div className="container">
                    <div className="footer_row row">
                        <div className="col-md-3 col-sm-6 footer_about">
                            <h2>ABOUT OUR COMPANY</h2>
                            <img className="footer-image" src="images/impLogoS.png" alt=""></img>
                            <p>THE AUTHORITY IN TRAFFIC CONTROL AND WORK ZONE SAFETY EQUIPMENT</p>
                            <ul className="socail_icon">
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 footer_about">
                            <h2>CONTACT US</h2>
                            <address>
                                <p>Have questions, comments or just want to say hello</p>
                                <ul className="my_address">
                                    <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i> Service@ImperialTrafficSolutions.com</a></li>
                                    <li><a href="#"><i className="fa fa-phone" aria-hidden="true"></i>(844) 467-8723 (IMP-TRAF)</a></li>
                                    <li><a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i><span>13111 Nutty Brown Road Austin, TX 78737</span></a></li>
                                </ul>
                            </address>
                        </div>
                    </div>
                </div>
                <div className="copyright_area">
                    CCopyright 2017 All rights reserved. Designed by Pietas LLC
                </div>
            </footer>
        </Fragment>
  );
}

export default Footer;
