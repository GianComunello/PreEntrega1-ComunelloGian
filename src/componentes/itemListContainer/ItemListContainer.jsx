import style from "./ItemListContainer.module.css"
export default function ItemListContainer({titulo}) {
  return (
    <div className={style.contendorTitulo}>
    <h1 className={style.tituloProp}>{titulo}</h1>
    </div>
  )
}
