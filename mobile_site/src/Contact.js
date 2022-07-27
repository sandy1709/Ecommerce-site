/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Main.css";
import { useState, useEffect } from "react";
import React from 'react';
import { Link } from "react-router-dom";
// import instalogo from "./instalogo.png"
// import facebooklogo from "./facebooklogo.png"
// import twitterlogo from "./twitterlogo.png"



function Contact() {


    return (
        <div className="mainpage">
            <nav className="mainpage-nav">

                <div className="nav">
                    <Link to="/">
                        <h2 id="navlogot" style={{textDecoration: 'none'}} >
                            Z<span id="name">-mobiles </span>
                        </h2>
                    </Link>

                    <ul>

                        <li><Link to="/shop">
                            <a href="#">Shop</a>
                        </Link></li>
                        <li><Link to="/about">
                            <a href="#">About</a>
                        </Link></li>
                        <li><Link to="/faq">
                            <a href="#">FAQ</a>
                        </Link></li>
                        <li>
                            <Link to="/contact">
                                <a href="#">Contact</a>
                            </Link>
                        </li>
                        <li><Link to="/add">
                            <a href="#">Add</a>
                        </Link></li>
                        <input type="text" id="header-search" placeholder="Search" name="s" />
                        <li><a href="#">signUp/Login</a></li>
                    </ul>


                </div>
            </nav>
            <div className="contactarea">
                <div className="delivaryimg">
                    <img src="https://www.pngmart.com/files/21/Food-Delivery-Scooter-PNG-HD-Isolated.png" alt="Delivery Boy" />
                </div>
                <div>
                    <ul className="unorderedlist">
                        <li><b>Customer Care</b></li>
                        <li>+91-9876543210</li>
                        <li>helpyourself@gmail.com</li>
                        <li>Mumbai</li>
                        <li>400047</li>
                    </ul>
                </div>
            </div>
            <footer>
                <div className="footer">
                    <div className="footer1">
                        <div className="f1">
                            <h5>Best Price Guarantee</h5>
                            <h6>If you find low price we will match it</h6>
                        </div>
                        <div className="f1">
                            <h5>Easy one hour pickup</h5>
                            <h6>Grab your gear and go</h6>
                        </div>
                        <div className="f1">
                            <h5>Free Shipping</h5>
                            <h6>Online only.  Exclusive apply</h6>
                        </div>
                        <div className="f1">
                            <h5>Contact</h5>
                            <h6>Online only.  Exclusive apply</h6>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Contact;

