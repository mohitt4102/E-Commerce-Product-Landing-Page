import { useState, useEffect } from "react"

import Navbar from "./Components/Navbar"
import NavAccount from "./Components/NavAccount"
import ProductImg from "./Components/ProductImg"
import ProductDescription from "./Components/ProductDescription.jsx"
import getData from "./data"

import "./Style/Ecommerce.css"

function Ecommerce() {
  const [cart] = useState(0)
  const [data, setData] = useState(getData())

  useEffect(() => {
    setData(getData())
  }, [])

  return (
    <div className="e-commerce">
      <header>
        <Navbar />
        <NavAccount cart={cart} data={data.shoes} />
      </header>
      <main>
        <ProductImg data={data.shoes.images} />
        <ProductDescription data={data}/>
      </main>
    </div>
  )
}

export default Ecommerce

