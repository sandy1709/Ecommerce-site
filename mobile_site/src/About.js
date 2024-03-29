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



function About() {


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
                <div className="aboutext">
                    <div className="text-center"><b>About us</b></div>
                    <div>Ecommerce is the buying and seldivng of goods and services over the Internet.</div>
                    <div>It is conducted over computers, tablets, smartphones, and other smart devices.</div>
                    <div>Almost anything can be purchased through ecommerce today; for this reason, ecommerce is often highly competitive.</div>
                    <div>It can be a substitute for brick-and-mortar stores, though some businesses choose to maintain both.</div>
                    <div>Ecommerce operates in several market segments including business-to-business, business-to-consumer, consumer-to-consumer, and consumer-to-business.</div>
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
export default About;

