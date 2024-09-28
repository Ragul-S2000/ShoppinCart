import { useContext, useState } from "react";
import { Productlist } from "../context/Poductlist";
import BuyBtn from "./BuyBtn";


const Arithematicbtn = ({ product, id, setproduct }) => {
  let [total, settotal] = useState(0)
  let [price, setprice] = useState(0)
  let [count, setcount] = useState(0)
  let {totalprice, settotalprice} =useContext(Productlist)
  let {tcount, settcount}=useContext(Productlist)
  
function handleIncrease(id) {
  setcount(count + 1);
  settotal(total + 1);
  setprice(price + product.price);
  settotalprice(totalprice + product.price);
  settcount(tcount + 1);
  }
  function handleDecrease(id) {
  setcount(count - 1);
  settotal(total - 1);
  setprice(price - product.price);
  settotalprice(totalprice - product.price);
  settcount(tcount - 1);
}


  return (
    <>
      <div className="d-flex flex-row justify-content-evenly my-3" >
        <button type="button" onClick={() => handleIncrease(id)} className="my-0 px-4" >+</button>
        <p>{count}</p>
        <button type="button" onClick={() => handleDecrease(id)}  className="my-0 px-4" >-</button>
      </div>
      <div>
        <BuyBtn count={count} setcount={setcount}
          product={product} id={product.id}
          tcount={tcount} settcount={settcount}
          totalprice={totalprice} settotalprice={settotalprice} 
          price={price} setprice={setprice}
        />
      </div>
    </>
  );
};

export default Arithematicbtn;
