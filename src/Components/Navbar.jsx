import { useMediaQuery } from "react-responsive"
import { NavLink } from "react-router-dom"

import Logo from "../images/logo.svg"

import "../Style/Navbar.css"

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 })
  return isDesktop ? children : null
}

export default function Navbar() {

  return (
    <nav>
      <Desktop>
        <img className="logo" src={Logo} alt="Logo" />
        <ul className="navbar">
          <li className="navbar__item">
            <NavLink to="/collections">Collections</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/men">Men</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/women">Women</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </Desktop>
      
    </nav>
  )
}
