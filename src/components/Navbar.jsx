import React from "react";
import "../styles/Navbar.css";
import { useContext } from "react";
import { Productlist } from "../context/Poductlist";

const Navbar = () => {

let { totalprice, settotalprice } = useContext(Productlist);
let { tcount, settcount } = useContext(Productlist);
  

  return (
    <>
      <div className="container-flud">
        <div className="row">
          <div className="nav">
            <div className="title">
              <h1>MYCART</h1>
            </div>
            <div className="price_box">
              <p className="count">Count:{ tcount}</p>
              <p className="Total">TotalPrice:{ totalprice.toFixed(3) }</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
