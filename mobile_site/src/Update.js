/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import "./Update.css";

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
                                <h2 id="navlogot">
                                    Z<span id="name">-mobiles </span>
                                </h2>
                            </Link>
                        </div>
                        <div className="navmenu">
                            <ul>
                                <li>
                                    <a href="#">Shop</a>
                                </li>
                                <li><Link to="/about">
                            <a href="#">Aontact</a>
                        </Link></li>
                                <li>
                                    <a href="#">FAQ</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
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
                <br /> <br />
                <b className="addtext">Product Name :  </b>{" "}
                <input value={pName} onChange={(e) => {
                    setpName(e.target.value);
                }}
                    type="text" placeholder="Product Name" />
                <br /> <br />
                <b className="addtext">Company Name : </b>{" "}
                <input value={cName} onChange={(e) => {
                    setcName(e.target.value);
                }}
                    type="text" placeholder="Company Name"
                />
                <br /> <br />
                <b className="addtext">Product Type : </b>{" "}
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
                <b className="addtext">Price : </b>{" "}
                <input
                    value={B}
                    onChange={(e) => {
                        setB(e.target.value);
                    }}
                    type="text"
                    placeholder="Price"
                />
                <br />
                <b className="addtext">Ram : </b>{" "}
                <input
                    value={C}
                    onChange={(e) => {
                        setC(e.target.value);
                    }}
                    type="text"
                    placeholder="Ram"
                />
                <br />
                <b className="addtext">Memory : </b>{" "}
                <input
                    value={D}
                    onChange={(e) => {
                        setD(e.target.value);
                    }}
                    type="text"
                    placeholder="Memory"
                />
                <br />
                <b className="addtext">Processor : </b>{" "}
                <input
                    value={E}
                    onChange={(e) => {
                        setE(e.target.value);
                    }}
                    type="text"
                    placeholder="Processor"
                />
                <br />
                <b className="addtext">Battery: </b>{" "}
                <input
                    value={F}
                    onChange={(e) => {
                        setF(e.target.value);
                    }}
                    type="text"
                    placeholder="Battery"
                />
                <br />
                <b className="addtext">Rear Camera : </b>{" "}
                <input
                    value={G}
                    onChange={(e) => {
                        setG(e.target.value);
                    }}
                    type="text"
                    placeholder="Rear camera"
                />
                <br />
                <b className="addtext">Front Camera : </b>{" "}
                <input
                    value={H}
                    onChange={(e) => {
                        setH(e.target.value);
                    }}
                    type="text"
                    placeholder="Front camera"
                />
                <br />
                <b className="addtext">Warrenty : </b>{" "}
                <input
                    value={I}
                    onChange={(e) => {
                        setI(e.target.value);
                    }}
                    type="text"
                    placeholder="Warrenty"
                />
                <br />
                <b className="addtext">Os : </b>{" "}
                <input
                    value={J}
                    onChange={(e) => {
                        setJ(e.target.value);
                    }}
                    type="text"
                    placeholder="OS"
                />
                <br />
                <b className="addtext">Display : </b>{" "}
                <input
                    value={K}
                    onChange={(e) => {
                        setK(e.target.value);
                    }}
                    type="text"
                    placeholder="Display"
                />
                <br />
                <b className="addtext">Image link : </b>{" "}
                <input
                    value={L}
                    onChange={(e) => {
                        setL(e.target.value);
                    }}
                    type="text"
                    placeholder="Image link"
                />
                <br /> <br />
                <Link to={`/product/${PRODUCTID}`}>
                    <button onClick={Updateproduct}>Update Product</button>
                </Link>
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

export default Add;
