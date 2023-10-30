import style from "./Navbar.module.css"

import CartWidget from "../cartwidget/CartWidget"
export default function Navbar() {
  return (
    <>
    <div className={style.navContainer}>
    <h1>HorizonteShop</h1>
    <ul className={style.ulNav}>
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
