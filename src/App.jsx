import Counter from "./components/counter/Counter"
import FooterContainer from "./components/footer/FooterContainer"
import ItemListContainer from "./components/itemList/ItemListContainer"

import NavBarContainer from "./components/navbar/NavBarContainer"


function App() {

  return (
    <>
    <div>
      <NavBarContainer/>
      <Counter/>
      <ItemListContainer/>
      <FooterContainer/>
    </div>
     
    </>
  )
}

export default App
