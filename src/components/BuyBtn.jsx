
import {  useContext, useState} from 'react'
import { Productlist } from '../context/Poductlist';





const BuyBtn = ({ product, id, count, setcount,price,setprice,
  totalprice, settotalprice,tcount,settcount
}) => {
  let {productlist, setproductlist,cart,setcart}=
    useContext(Productlist)
 let [Incart, setIncart] = useState(false);
    console.log(count);

  
  function handleADD(id,index) {
    let newproduct = productlist[0].products.find((item) => item.id === id);
    if (newproduct) {
      setcart([...cart, newproduct]);
      setIncart(true);
      setcount(count + 1);
      settcount(tcount + 1)
      if (count === 0) {
        setprice(newproduct.price);
        setprice(price + newproduct.price);
      }
      settotalprice(totalprice + newproduct.price);
    }
  }

  function handleRemove(id) {
    let newproduct = productlist[0].products.find((item) => item.id === id);
    setcart(cart.filter((item) => item.id !== id));
    setIncart(false);
    setcount(count - 1);
    if (count >=1) {
      setprice(price - newproduct.price)
      settotalprice(totalprice-newproduct.price)
    }
 
      
    

    settcount(tcount-1)
  }   
  return (
    <>
      <div className="div">
        {Incart ? (
          <button type="button" onClick={() => handleRemove(id)}>
            Remove
          </button>
        ) : (
          <button type="button" onClick={() => handleADD(id)}>
            ADD
          </button>
        )}
      </div>
      <div className="mt-5">
        <div className="d-flex flex-row">
          <p>Sub-Total</p>
          <p className="position-absolute end-0 mx-5">{price}</p>
        </div>
        <hr className='my-2'/>
        <div className="d-flex flex-row">
          <p>Delivery Charge</p>
          <p className="position-absolute end-0 mx-5">Free</p>
      </div>
      <hr className='my-2'/>
        <div className="d-flex flex-row">
          <p>Total (in ₨)</p>
          <p className="position-absolute end-0 mx-5">{price.toFixed(3)}</p>
        </div>
      </div>
    </>
  );
}

export default BuyBtn