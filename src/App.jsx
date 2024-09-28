import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Cardlist from './components/Cardlist'
import ProductContext, { Productlist } from './context/Poductlist'


import './App.css'

const App = () => {

  
  
  return (
    <>
      <ProductContext>
      <Navbar />
        <div className="container">
          <div className="row">
      <Cardlist />
          </div>
        </div>
      </ProductContext>
    </>
  )
}

export default App