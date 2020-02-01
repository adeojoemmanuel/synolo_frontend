import React from 'react';
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="section section-wrap section-footer">
            <div className="col">
                <div className="col-1-of-4">
                    <div className="u-uppercase-text">
                        <h1 className="heading-primary section-footer__heading">
                            Synolo
                        </h1>
                    </div>
                    <h2 className="heading-primary--sub">
                    Synollo Platforms & Solutions Limited is a real estate focused service company registered in compliance with the Company and Allied Matters Act, with registration number RCXXXX. Synollo is a platform managed by Synollo Platforms & Solutions Limited.
                    </h2>
                </div>

                <div className="col-2-of-3 section-footer__grid">


                <div className="col-1-of-4">
                        <div className="u-uppercase-text u-center-text">
                            <h1 className="footer-heading">
                                Platforms
                            </h1>

                            <button className="btn footer-links">
                                Investors
                            </button>

                            <button className="btn footer-links">
                                Developers
                            </button> 
                            <button className="btn footer-links">
                                Asset Owners
                            </button> 
                            <button className="btn footer-links">
                                Distressed Sales
                            </button> 
                            <button className="btn footer-links">
                                Direct Sales Reps
                            </button> 
                        </div>
                    </div>

                    <div className="col-1-of-4">
                        <div className="u-uppercase-text u-center-text">
                            <h1 className="footer-heading">
                                About
                            </h1>
                        </div> 
                        <Link to="/about">
                          <button className="btn footer-links">
                            About Us
                          </button>
                        </Link>
                        <Link to="/market">
                          <button className="btn footer-links">
                            About the Market
                          </button>
                        </Link>
                    </div>

                    <div className="col-1-of-4">
                        <div className="u-uppercase-text u-center-text">
                            <h1 className="footer-heading">
                                Solutions
                            </h1>
                        </div> 

                        <button className="btn footer-links">
                           Rental / Lease / Sales
                        </button>

                        <button className="btn footer-links">
                            Professional services
                        </button>


                        <button className="btn footer-links">
                            Professional services
                        </button>    
                    </div>


                    <div className="col-1-of-4">
                        <div className="u-uppercase-text u-center-text">
                            <h1 className="footer-heading">
                                Supports
                            </h1>
                        </div>

                        <Link to="/faq">
                          <button className="btn footer-links">
                            FAQs
                          </button>
                        </Link>

                        <Link to="/contactus">
                          <button className="btn footer-links">
                            Contact Us
                          </button>
                        </Link>    
                    </div>
                </div>
            </div>

            <hr/>
        </footer>
    )
}

export default Footer;