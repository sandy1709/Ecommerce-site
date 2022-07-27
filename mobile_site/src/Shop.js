/* eslint-disable array-callback-return */
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


function Shop() {

    const [data, setData] = useState([]);

    useEffect(() => { proDetails() }, [])
    // let proDets = {}
    let apidata = []

    const proDetails = async () => {
        fetch("http://127.0.0.1:3001/list")
            .then((res) => res.json())
            .then((res) => {
                let x = [];
                res.map((book) => {
                    x = [
                        ...x,
                        {
                            pid: book.product_id,
                            pname: book.product_name,
                            ptype: book.product_type,
                            cid: book.company_id,
                            cname: book.company_name,
                            uid: book.user_id,
                            A: book.A,
                            B: book.B,
                            C: book.C,
                            D: book.D,
                            E: book.E,
                            F: book.F,
                            G: book.G,
                            H: book.H,
                            I: book.I,
                            J: book.J,
                            K: book.K,
                            L: book.L,
                            likes: book.likes,
                        },
                    ];
                })
                setData(x);
            })
    };


    let MobileData = "";
    MobileData = data.map((phonedetails, i) => {
            console.log(phonedetails);
            return (<div className="mobilecard" >
                <div>
                    <img src={phonedetails.L} alt="mobile card img" className="mobilecardimage"></img>
                </div>
                <div>
                    <h4 className="mobiletitle">{phonedetails.pname}</h4>
                </div>
                <Link to={`product/${phonedetails.pid}`} style={{ textDecoration: 'none' }} >
                    <div class="price">Price : {phonedetails.B}</div>
                </Link>
            </div>)
    })

    return (
        <div className="mainpage">
            <nav className="mainpage-nav shopnavbar">

                <div className="nav shopnav">
                    <Link to="/">
                        <h2 id="navlogot" style={{textDecoration: 'none'}}>
                            Z<span id="name">-mobiles </span>
                        </h2>
                    </Link>
                    <ul>
                        <li><a href="#">Shop</a></li>
                        <li><Link to="/about">
                            <a href="#">About</a>
                        </Link></li>
                        <li><Link to="/faq">
                            <a href="#">FAQ</a>
                        </Link></li>
                        <li><Link to="/contact">
                            <a href="#">Contact</a>
                        </Link></li>
                        <li><Link to="/add">
                            <a href="#">Add</a>
                        </Link></li>
                        <input type="text" id="header-search" placeholder="Search" name="s" />
                        <li><a href="#">signUp/Login</a></li>
                    </ul>


                </div>
            </nav>
            <section id="mainpagedata shoppagedata">
                <h1 className="ourtext">Our<span className="worldtext"> World</span></h1>
                <div className="wrap wrappagedata">
                    {MobileData}
                </div>
            </section>

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
        </div>
    )
}

export default Shop;

