import style from "./ItemListContainer.modules.css"
export default function ItemListContainer({titulo}) {
  return (
    <div className="contendorTitulo">
    <h1 className="tituloProp">{titulo}</h1>
    </div>
  )
}
