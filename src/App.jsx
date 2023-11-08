import Navbar from "./componentes/Navbar/Navbar"
import ItemListContainer from './componentes/itemListContainer/ItemListContainer'
import './App.css'


function App() {

  return (
    <>
     <Navbar/>
     <ItemListContainer titulo="Soy un titulo pasado por prop"/>
    </>
  )
}

export default App
