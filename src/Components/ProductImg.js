import { useState } from "react"
import { useMediaQuery } from "react-responsive"
import "../Style/ProductImg.css"

export default function ProductImg({ data }) {
  const [imgState, setImg] = useState(0)

  const img = data.path[`${imgState}`]

  const thumbnailImg = data.path_thumbnail.map((image, index) => (
    <img
      className={
        img == data.path[index]
          ? "img img--thumbnail img--thumbnail--selected"
          : "img img--thumbnail"
      }
      src={image}
      key={index}
      alt="Product-Image"
    />
  ))

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 501 })
    return isDesktop ? children : null
  }

  return (
    <div className="productImg">
      <Desktop>
        <img
          className="img img--big"
          src={img}
          alt="Product-image"
        />
        <div className="thumbnail__container">{thumbnailImg}</div>
      </Desktop>
    </div>
  )
}
