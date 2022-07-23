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

    // setpType("");
    // setpName("");
    // setcName("");
    // setpDetails("");
    // setA("");
    // setB("");
    // setC("");
    // setD("");
    // setE("");
    // setF("");
    // setG("");
    // setH("");
    // setI("");
    // setJ("");
    // setK("");
    // setL("");
  };
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
        <br /> <br />
        <b className="addtext">Product Name : </b>{" "}
        <input
          value={pName}
          onChange={(e) => {
            setpName(e.target.value);
          }}
          type="text"
          placeholder="Product Name"
        />
        <br /> <br />
        <b className="addtext">Company Name : </b>{" "}
        <input
          value={cName}
          onChange={(e) => {
            setcName(e.target.value);
          }}
          type="text"
          placeholder="Company Name"
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
        <button onClick={Addproduct}>Add Product</button>
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
