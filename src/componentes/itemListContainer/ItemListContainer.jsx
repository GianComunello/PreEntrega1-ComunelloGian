import ItemCount from "../ItemCount/ItemCount";
import style from "./ItemListContainer.module.css";
import ItemList from "../ItemList/ItemList"

export default function ItemListContainer({ titulo }) {

  return (
    <>
      <div className={style.contendorTitulo}>
        <h1 className={style.tituloProp}>{titulo}</h1>
      </div>
      <ItemList/>
      <ItemCount initial={1} stock={10} onAdd={(cantidad) => console.log("Cantidad agregada: ", cantidad)}/>
    </>
  );
}
