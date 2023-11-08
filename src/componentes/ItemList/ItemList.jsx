import React from "react";
import { useEffect, useState } from "react";
import style from "./ItemList.module.css";
import Item from "../Item/Item";

export default function ItemList() {
  const [array, setArray] = useState([])
  const [cargando, setCargando]=useState(false)
  useEffect(() => {
    setCargando(true)
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
      .then((r) => r.json())
      .then((r) => setArray(r));
      setCargando(false)
    }, 5000);
  }, [])
  


  return (
    <>
      <h1>Productos</h1>
      <div className={style.contenedorArray}>

      {cargando ? <div className={style.cargar}></div> : null }
        {array.map(p => <Item key={p.id} p={p}/>)}
      
      </div>
    </>
  );
}
