/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import "./Add.css";

import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";

function Add() {
    const [pType, setpType] = useState("");
    const [A, setA] = useState("");
    const [B, setB] = useState("");
    const [C, setC] = useState("");
    const [D, setD] = useState("");
    const [E, setE] = useState("");
    const [F, setF] = useState("");
    const [G, setG] = useState("");
    const [H, setH] = useState("");
    const [I, setI] = useState("");
    const [J, setJ] = useState("");
    const [K, setK] = useState("");
    const [L, setL] = useState("");
    // const [M, setM] = useState("");
    // const [N, setN] = useState("");
    // const [O, setO] = useState("");
    const [cName, setcName] = useState("");
    const [pDetails, setpDetails] = useState("");
    //   const [likes, setlikes] = useState(0);
    const [pName, setpName] = useState("");

    let pId, cId, uId;

    const Addproduct = async () => {
        pId = Math.random() * 100000;
        cId = Math.random() * 10000;
        uId = Math.random() * 1000;

        let x = {
            pid: pId,
            pname: pName,
            ptype: pType,
            cid: cId,
            cname: cName,
            uid: uId,
            A: A,
            B: B,
            C: C,
            D: D,
            E: E,
            F: F,
            G: G,
            H: H,
            I: I,
            J: J,
            K: K,
            L: L,
            likes: 0,
        };
        if (pName === "" && pType === "" && cName === "") {
            alert("Fill some data to add to database")
            return;
        }
        await fetch("http://localhost:3001/add", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(x),
        });

        setpType("");
        setpName("");
        setcName("");
        setpDetails("");
        setA("");
        setB("");
        setC("");
        setD("");
        setE("");
        setF("");
        setG("");
        setH("");
        setI("");
        setJ("");
        setK("");
        setL("");
    };
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

            <div className="headedata">
                {/* <i class="fa fa-headphones one"></i>
                <i class="fa fa-headphones two"></i>
                <i class="fa fa-headphones three"></i>
                <i class="fa fa-headphones four"></i>
                <i class="fa fa-headphones five"></i>
                <i class="fa fa-headphones six"></i>
                <i class="fa fa-headphones seven"></i>
                <i class="fa fa-headphones eight"></i>
                <i class="fa fa-headphones nine"></i>
                <i class="fa fa-headphones ten"></i>
                <i class="fa fa-phones eleven"></i>
                <i class="fa fa-phones twelve"></i>
                <i class="fa fa-phones thirteen"></i>
                <i class="fa fa-phones fourteen"></i>
                <i class="fa fa-phones fifteen"></i>
                <i class="fa fa-phones sixteen"></i>
                <i class="fa fa-phones seventeen"></i>
                <i class="fa fa-phones eighteen"></i>
                <i class="fa fa-phones nineten"></i>
                <i class="fa fa-phones twenty"></i> */}
                <div className="inputboxes">
                    <b className="addtext">Enter your product data</b>
                    <br />
                    <b className="addtext">
                        {/* Product Name :  */}
                    </b>{" "}
                    <input value={pName} onChange={(e) => {
                        setpName(e.target.value);
                    }}
                        type="text"
                        placeholder="Product Name"
                    />
                    <br />
                    <b className="addtext">
                        {/* Company Name : */}
                    </b>{" "}
                    <input
                        value={cName}
                        onChange={(e) => {
                            setcName(e.target.value);
                        }}
                        type="text"
                        placeholder="Company Name"
                    />
                    <br />
                    <b className="addtext">
                        {/* Product Type :  */}
                    </b>{" "}
                    <input
                        value={pType}
                        onChange={(e) => {
                            setpType(e.target.value);
                        }}
                        type="text"
                        placeholder="Product Type"
                    />
                    <br /> <br />
                    <b className="addtext">Product Details</b>
                    <br />
                    <div className="details">

                        <b className="addtext">
                            {/* Price :  */}
                            <input value={B} onChange={(e) => {
                                setB(e.target.value);
                            }}
                                type="text" placeholder="Price"
                            /></b>

                        {/* <br /> */}
                        <b className="addtext">
                            {/* Ram : */}
                            <input value={C} onChange={(e) => { setC(e.target.value); }}
                                type="text"
                                placeholder="Ram"
                            /></b>{" "}


                        {/* <br /> */}
                        <b className="addtext">
                            {/* Memory : */}
                            <input
                                value={D}
                                onChange={(e) => {
                                    setD(e.target.value);
                                }}
                                type="text"
                                placeholder="Memory"
                            /> </b>{" "}

                        {/* <br /> */}
                        <b className="addtext">
                            {/* Processor : */}
                            <input
                                value={E}
                                onChange={(e) => {
                                    setE(e.target.value);
                                }}
                                type="text"
                                placeholder="Processor"
                            /> </b>{" "}

                        {/* <br /> */}
                        <b className="addtext">
                            {/* Battery:  */}
                            <input
                                value={F}
                                onChange={(e) => {
                                    setF(e.target.value);
                                }}
                                type="text"
                                placeholder="Battery"
                            /></b>{" "}

                        {/* <br /> */}
                        <b className="addtext">
                            {/* Rear Camera : */}
                            <input
                                value={G}
                                onChange={(e) => {
                                    setG(e.target.value);
                                }}
                                type="text"
                                placeholder="Rear camera"
                            /> </b>{" "}

                        {/* <br /> */}
                        <b className="addtext">
                            {/* Front Camera : */}
                            <input
                                value={H}
                                onChange={(e) => {
                                    setH(e.target.value);
                                }}
                                type="text"
                                placeholder="Front camera"
                            /> </b>{" "}

                        {/* <br /> */}
                        <b className="addtext">
                            {/* Warrenty : */}
                            <input
                                value={I}
                                onChange={(e) => {
                                    setI(e.target.value);
                                }}
                                type="text"
                                placeholder="Warrenty"
                            /> </b>{" "}

                        {/* <br /> */}
                        <b className="addtext">
                            {/* Os : */}
                            <input
                                value={J}
                                onChange={(e) => {
                                    setJ(e.target.value);
                                }}
                                type="text"
                                placeholder="OS"
                            /> </b>{" "}

                        {/* <br /> */}
                        <b className="addtext">
                            {/* Display :  */}
                            <input
                                value={K}
                                onChange={(e) => {
                                    setK(e.target.value);
                                }}
                                type="text"
                                placeholder="Display"
                            /></b>{" "}

                        {/* <br /> */}
                        <b className="addtext">
                            {/* Image link : */}
                            <input
                                value={L}
                                onChange={(e) => {
                                    setL(e.target.value);
                                }}
                                type="text"
                                placeholder="Image link"
                            /> </b>{" "}

                        <br /> <br />
                    </div>
                    <button onClick={Addproduct}>Add Product</button>
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
        </div >
    );
}

export default Add;
