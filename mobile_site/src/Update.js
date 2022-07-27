/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import "./Add.css";

import { useParams, Link } from "react-router-dom";
import React from "react";

import { useState, useEffect } from "react";

function Add() {
    const [pType, setpType] = useState("");
    const [cName, setcName] = useState("");
    const [pId, setpId] = useState("");
    const [cId, setcId] = useState("");
    const [uId, setuId] = useState("");
    const [pDetails, setpDetails] = useState("");
    const [pName, setpName] = useState("");
    const [proData, setproData] = useState([]);
    const [proDets, setproDets] = useState();
    let { PRODUCTID } = useParams();
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

    useEffect(() => {
        proDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const proDetails = async () => {
        const link = `http://127.0.0.1:3001/get?pid=` + PRODUCTID;
        const fetched_url = await fetch(link);
        let data = await fetched_url.json();
        setproDets(data);
        setpType(data.product_type);
        setcName(data.company_name);
        setA(data.A);
        setB(data.B);
        setC(data.C);
        setD(data.D);
        setE(data.E);
        setF(data.F);
        setG(data.G);
        setH(data.H);
        setI(data.I);
        setJ(data.J);
        setK(data.K);
        setL(data.L);
        setpName(data.product_name);
        setpId(data.product_id);
        setcId(data.company_id);
        setuId(data.user_id);
    };


    const Updateproduct = async () => {
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
        console.log(x)

        await fetch('http://localhost:3001/update', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(x),
        })

    }
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
                                <li><Link to="/contact">
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
                    <Link to={`/product/${PRODUCTID}`}>
                    <button onClick={Updateproduct}>Update Product</button>
                </Link>
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
