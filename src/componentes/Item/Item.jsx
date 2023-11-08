import style from "./Item.module.css"
export default function Item({p}) {
  return (
    <>
     <div className={style.contenedorCard} key={p.id}>
    <h2 className= {style.nombrePersonaje}>{p.title}</h2>
     <img src={p.image} alt={p.title} width="200rem" height="200rem"/>
     <h3 className={style.precio}>Precio: {p.price}</h3>
     <h3 className={style.precio}>Categoria: {p.category}</h3>
     <button className={style.botonDetalles}>Ver detalles</button>
    </div>
    </>
  )
}
