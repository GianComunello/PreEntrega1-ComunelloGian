import React from "react";
import { useEffect, useState } from "react";
import style from "./ItemList.module.css";
import Item from "../Item/Item";
import axios from "axios"

export default function ItemList() {
  const [array, setArray] = useState([])
  const [cargando, setCargando]=useState(false)
  useEffect(() => {
    setCargando(true)
    setTimeout(() => {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        setArray(response.data);
      });
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
