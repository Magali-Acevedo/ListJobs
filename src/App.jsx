import { Header } from './Components/Header'

import "../src/GlobalStyle.css"



//
import { FilterProvider } from './Context'
import { ListCard } from './Components/ListCard'

function App() {

  return (
    <>
      <FilterProvider>
      <Header/>
     <ListCard/>
      </FilterProvider>
    </>
  )
}

export default App
