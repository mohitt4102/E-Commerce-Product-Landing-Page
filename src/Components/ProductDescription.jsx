import minus from "../images/icon-minus.svg"
import plus from "../images/icon-plus.svg"
import cart from "../images/icon-cart.svg"

import "../Style/productDescription.css"

export default function ProductDescription({ data }) {
  
  const { companyName, shoes } = data
  const { name, price, discount, description } = shoes

  const sale = (price * discount) / 100

  return (
    <div className="ProductDescription">
      <h4 className="companyName">{companyName}</h4>
      <h1 className="ProductDescription__name">{name}</h1>
      <p className="ProductDescription__description">{description}</p>
      <div className="price">
        <div className="price__current">
          <p className="current__price">
            <span>${sale.toFixed(2)}</span>
          </p>
          <div className="current_discount">
            <span>{discount}%</span>
          </div>
        </div>
        <div className="price_previous">
          <span>${price.toFixed(2)}</span>
        </div>
      </div>
      <div className="btn__container">
        <div className="counter_container">
          <div
            className="counter"
          >
            <img src={minus} alt="button-minus" />
          </div>
          <span className="count__sum">0</span>
          <div
            className="counter"
          >
            <img src={plus} alt="button-plus" />
          </div>
        </div>
        <button className="button button--add">
          <img src={cart}/> Add to cart
        </button>
      </div>
    </div>
  )
}
