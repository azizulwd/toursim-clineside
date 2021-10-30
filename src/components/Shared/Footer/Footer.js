import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import phoneLogo from '../../../images/phone.png';
import emailLogo from '../../../images/email.png';
import address from '../../../images/address.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container footer_inner">
                <div className="footer_item">
                    <h2>Categories</h2>
                    <ul>
                        <li>
                            <Link to="/home">Budget Tours</Link>
                            <span>5</span>
                        </li>
                        <li>
                            <Link to="/home">Expert Insight</Link>
                            <span>7</span>
                        </li>
                        <li>
                            <Link to="/home">Independent</Link>
                            <span>2</span>
                        </li>
                        <li>
                            <Link to="/home">Luxury Tours</Link>
                            <span>2</span>
                        </li>
                        <li>
                            <Link to="/home">Safety Tips</Link>
                            <span>7</span>
                        </li>
                        <li>
                            <Link to="/home">Tips in Tricks</Link>
                            <span>3</span>
                        </li>
                    </ul>
                </div>
                <div className="footer_item">
                    <h2>Contact</h2>
                    <p>
                        <img src={phoneLogo} alt="" />
                        <span>01788888888</span>
                    </p>
                    <p>
                        <img src={emailLogo} alt="" />
                        <span>tixgig@hotmail.com</span>
                    </p>
                    <p>
                        <img src={address} alt="" />
                        <span>1230 Rajarbagh, Dhaka-3999, Dhaka city</span>
                    </p>
                </div>
                <div className="footer_item">
                    <h2>Newslater</h2>
                    <div className="newslater_signing">
                        <input type="text" placeholder="Email" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;