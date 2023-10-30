import style from "./Navbar.modules.css"
import CartWidget from "../cartwidget/CartWidget"


export default function Navbar() {
  return (
    <>
    <div className="navContainer">
    <h1>HorizonteShop</h1>
    <ul className="ulNav">
    <li>Celulares</li>
    <li>Tablet</li>
    <li>Televisores</li>
    <li>Notebooks</li>
    </ul>
    <CartWidget/>
    </div>
    </>
  )
}
