/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Main.css";
import { useState, useEffect } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import Faq from "react-faq-component";
// import instalogo from "./instalogo.png"
// import facebooklogo from "./facebooklogo.png"
// import twitterlogo from "./twitterlogo.png"



function About() {

    const data = {
        title: "FAQ (How it works)",
        rows: [
            {
                title: "Lorem ipsum dolor sit amet,",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                  ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                  In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                  Fusce sed commodo purus, at tempus turpis.`,
            },
            {
                title: "Nunc maximus, magna at ultricies elementum",
                content:
                    "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
            },
            {
                title: "Curabitur laoreet, mauris vel blandit fringilla",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: "What is the package version",
                content: <p>current version is 1.2.1</p>,
            },
        ],
    };

    const styles = {
        // bgColor: 'white',
        titleTextColor: "black",
        // titlePaddingLeft: "5px",
        rowTitleColor: "grey",
        // padding-left: "30px",
        rowContentPaddingLeft: '50px',
        // arrowColor: "red",
    };

    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };

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
            <div className="faqarea">
                <Faq className="faqtext"
                    data={data}
                    styles={styles}
                    config={config}
                />
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

