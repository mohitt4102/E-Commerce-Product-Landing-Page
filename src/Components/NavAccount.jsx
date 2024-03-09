import shoppingCart from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"

import "../Style/NavAccount.css"

export default function NavAccount() {

  return (
    <div className="navAccount">
      <div
        className="shoppingCart_container"
        aria-label="Open popup"
      >
        <img className="shoppingCart" src={shoppingCart} alt="Shopping-Cart" />
  
      </div>

      <img className="avatar" src={avatar} alt="Avatar" />

    </div>
  )
}
