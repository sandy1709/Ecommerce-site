/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import "./Product.css";

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import React from "react";

function Product() {
    const [proData, setproData] = useState([]);
    const [favList, setfavList] = useState([]);
    const [proDets, setproDets] = useState([]);
    let { PRODUCT_ID } = useParams();

    console.log(PRODUCT_ID)
    useEffect(() => {
        proDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // let proDets = {}

    const proDetails = async () => {
        const link = `http://127.0.0.1:3001/get?pid=` + PRODUCT_ID;
        const fetched_url = await fetch(link);
        let data = await fetched_url.json();
        console.log(data)
        setproData(data);
        // data = JSON.parse(data.product_details);
        // console.log(data);
        // setproDets(data);
    };

    const Deleteproduct = async (id) => {
        await fetch('http://localhost:3001/delete', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ pid: id })
        })
        console.log(id)
    };

    let Details = ""

    Details = Object.entries(proData).map(([key, value]) => {
        if (key.toLowerCase() !== "images" && key.toLowerCase() !== "url") {
            return (<div>
                <b>{key}:</b> {value}
            </div>)
        }
    })

    // for (const [key, value] of Object.entries(proDets)) {
    //     Details += <b>key:</b>+ `${value}`;
    //   }

    return (
        <div className="mainpage">
            <nav className="mainpage-nav">
                <div className="nav">
                    <div className="navbar">
                        <div className="navlogo">
                            <Link to="/">
                                <h2 id="navlogot" style={{textDecoration: 'none'}} >
                                    Z<span id="name">-mobiles </span>
                                </h2>
                            </Link>
                        </div>
                        <div className="navmenu">
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
                            </ul>
                        </div>
                    </div>
                    <div className="navsearch">
                        <div>
                            <input
                                type="text"
                                id="header-search"
                                placeholder="Search"
                                name="s"
                            />
                        </div>
                        <div>
                            <b className="login">signUp/Login</b>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="mainbody">
                <div className="bodydata">
                    <b>Product Name:</b> {proData["product_name"]}
                    <br />
                    <b>Company Name:</b> {proData["company_name"]}
                    <br />
                    <b>Product Type:</b> {proData["product_type"]}
                    <br />
                    <b>Price:</b> {proData["B"]}
                    <br />
                    <b>Ram:</b> {proData["C"]}
                    <br />
                    <b>Memory:</b> {proData["D"]}
                    <br />
                    <b>Processor:</b> {proData["E"]}
                    <br />
                    <b>Battery:</b> {proData["F"]}
                    <br />
                    <b>Rear Camera:</b> {proData["G"]}
                    <br />
                    <b>Front Camera:</b> {proData["H"]}
                    <br />
                    <b>OS:</b> {proData["J"]}
                    <br />
                    <b>Warrenty:</b> {proData["I"]}
                    <br />
                    <b>Display:</b> {proData["K"]}
                    <br /> <br />
                    <Link to={`/update/${PRODUCT_ID}`}>
                        <button className="editbutton">Edit</button>
                    </Link>

                    {"  "}
                    <Link to="/">
                        <button className="deletebutton" onClick={() => Deleteproduct(PRODUCT_ID)}>Delete</button>
                    </Link>
                </div>
                <div className="bodyimage">
                    <img src={proData["L"]} alt="Phone pic" className="detimg"></img>
                </div>
            </div>
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
    );
}

export default Product;
