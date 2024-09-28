import { useContext } from "react";
import "../styles/Cardlist.css";
import { Productlist } from "../context/Poductlist";
import Arithematicbtn from "../components/Arithematicbtn";


const Cardlist = () => {
   
  let { productlist,cart } = useContext(Productlist);
  let { products } = productlist[0];

  console.log(cart);
  

  return (
    <>
      {
        products.map((product) => {
          return (
            <div className="card mb-3 mt-2 " key={product.id} style={{height: "25rem"}}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={product.image}
                    style={{ height: "20rem" ,width:"20rem" ,marginTop:"50px"}}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div className="d-flex flex-row">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="h5 position-absolute end-0  me-3">₹{ product.price}</p>
                    </div>
                    <div>
                    <p className="card-text">{product.description.length > 150 ? product.description.substring(0, 100) : product.description}</p>
                    </div>
                    <Arithematicbtn product={product} id={product.id}/>
                  </div>
                </div>
              </div>
            </div>
          );
        })
        // map)
      }
    </>
  );
};

export default Cardlist;
